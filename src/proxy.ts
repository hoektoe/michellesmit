import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

type Representation = 'html' | 'markdown' | 'not-acceptable'

function qualityFor(accept: string, mediaType: string) {
  const exact = accept
    .split(',')
    .map((part, order) => {
      const [type, ...parameters] = part.trim().toLowerCase().split(';')
      const quality = parameters
        .find((parameter) => parameter.trim().startsWith('q='))
        ?.trim()
        .slice(2)
      return { order, quality: quality ? Number(quality) : 1, type }
    })
    .find((entry) => entry.type === mediaType)

  return exact && Number.isFinite(exact.quality) ? { order: exact.order, quality: Math.max(0, exact.quality) } : null
}

function representationFor(accept: string | null): Representation {
  if (!accept?.trim()) return 'html'

  const markdown = qualityFor(accept, 'text/markdown')
  const html = qualityFor(accept, 'text/html')
  const wildcard = qualityFor(accept, '*/*')

  if (!markdown && !html && !wildcard) return 'not-acceptable'

  const markdownQuality = markdown?.quality ?? wildcard?.quality ?? 0
  const htmlQuality = html?.quality ?? wildcard?.quality ?? 0

  if (markdownQuality > htmlQuality) return 'markdown'
  if (htmlQuality > 0) return 'html'
  if (markdownQuality > 0) return 'markdown'
  return 'not-acceptable'
}

function withVary(response: NextResponse) {
  const vary = response.headers.get('Vary')
  const values = new Set(
    (vary || '')
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean),
  )
  values.add('Accept')
  values.add('Accept-Encoding')
  response.headers.set('Vary', Array.from(values).join(', '))
  return response
}

export function proxy(request: NextRequest) {
  const representation = representationFor(request.headers.get('accept'))

  if (representation === 'not-acceptable') {
    return withVary(new NextResponse('Not Acceptable\n', { status: 406 }))
  }

  if (representation === 'markdown') {
    const rewriteUrl = request.nextUrl.clone()
    rewriteUrl.pathname = '/api/markdown'
    rewriteUrl.search = ''
    rewriteUrl.searchParams.set('path', request.nextUrl.pathname)
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-agentic-path', request.nextUrl.pathname)
    return withVary(NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } }))
  }

  return withVary(NextResponse.next())
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
