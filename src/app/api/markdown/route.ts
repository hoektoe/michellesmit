import { getAgenticNotFound, getAgenticPage } from '@/lib/agentic-content'

export const dynamic = 'force-dynamic'

const markdownHeaders = {
  'Cache-Control': 'public, max-age=0, must-revalidate',
  'Content-Type': 'text/markdown; charset=utf-8',
  Vary: 'Accept, Accept-Encoding',
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const pathname = request.headers.get('x-agentic-path') || searchParams.get('path') || '/'
  const page = getAgenticPage(pathname)

  return new Response(page || getAgenticNotFound(pathname), {
    headers: markdownHeaders,
    status: page ? 200 : 404,
  })
}
