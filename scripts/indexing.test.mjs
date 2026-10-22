// Run against `yarn build && yarn start`, or set INDEXING_BASE_URL to a deployment.
import assert from 'node:assert/strict'
import test from 'node:test'

const baseUrl = process.env.INDEXING_BASE_URL || 'http://localhost:3000'
const canonicalOrigin = 'https://www.michellesmit.com'
const indexablePaths = [
  '/',
  '/about',
  '/services',
  '/anxiety',
  '/depression',
  '/substance-abuse',
  '/relationships',
  '/contact',
  '/stellenbosch',
  '/franschhoek',
  '/rates-and-insurance',
]

async function get(path, options) {
  return fetch(new URL(path, baseUrl), { signal: AbortSignal.timeout(15000), ...options })
}

function metaTags(html) {
  return html.match(/<meta\b[^>]*>/g) || []
}

for (const path of indexablePaths) {
  test(`${path} serves an indexable page with a self canonical on www`, async () => {
    const response = await get(path, { redirect: 'manual' })
    assert.equal(response.status, 200)
    const html = await response.text()
    const links = (html.match(/<link\b[^>]*>/g) || []).filter((tag) => tag.includes('rel="canonical"'))
    assert.equal(links.length, 1)
    const canonical = links[0].match(/href="([^"]+)"/)?.[1]
    assert.ok(canonical)
    assert.equal(new URL(canonical).href, new URL(path, canonicalOrigin).href)
    const robots = metaTags(html).filter((tag) => /name="(?:robots|googlebot)"/.test(tag))
    assert.ok(robots.length > 0)
    assert.ok(
      robots.every((tag) => !tag.includes('noindex')),
      robots.join('\n'),
    )
    assert.ok(!response.headers.get('x-robots-tag')?.includes('noindex'))
  })
}

test('sitemap lists only the canonical, indexable pages', async () => {
  const response = await get('/sitemap.xml')
  assert.equal(response.status, 200)
  const xml = await response.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  assert.deepEqual(urls.sort(), indexablePaths.map((path) => new URL(path, canonicalOrigin).href).sort())
})

test('robots.txt advertises the canonical sitemap and allows crawling', async () => {
  const response = await get('/robots.txt')
  assert.equal(response.status, 200)
  const robots = await response.text()
  assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`))
  assert.match(robots, /User-agent: \*\s+Allow: \//)
})

test('privacy policy remains noindex for general crawlers and Googlebot', async () => {
  const response = await get('/privacy-policy')
  assert.equal(response.status, 200)
  const tags = metaTags(await response.text())
  for (const name of ['robots', 'googlebot']) {
    const tag = tags.find((tag) => tag.includes(`name="${name}"`))
    assert.ok(tag?.includes('noindex'), tag)
  }
})

for (const [source, destination] of [
  ['/en', '/'],
  ['/en/', '/'],
  ['/en/?utm_source=legacy', '/?utm_source=legacy'],
  ['/therapy-services', '/services'],
]) {
  test(`${source} permanently redirects to ${destination}`, async () => {
    let url = new URL(source, baseUrl)
    let redirects = 0
    while (true) {
      const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000) })
      if (response.status === 200) break
      assert.equal(response.status, 308, url.href)
      assert.ok(++redirects <= 2, 'redirect loop or unnecessary redirect chain')
      const location = response.headers.get('location')
      assert.ok(location)
      url = new URL(location, url)
    }
    assert.ok(redirects > 0)
    assert.equal(url.pathname + url.search, destination)
  })
}
