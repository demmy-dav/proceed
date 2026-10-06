// Post-build step: writes each rendered page into its dist HTML file, inlines the CSS
// and preloads the fonts the first screen needs, so text paints before any JS runs.
import { readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist')
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

const pages = [
  { page: 'home', file: 'index.html' },
  { page: 'work', file: 'work/index.html' },
  { page: 'how', file: 'how-we-work/index.html' },
  { page: 'book', file: 'book/index.html' },
]

// Preload the two faces used by the H1 and lead.
const assets = readdirSync(`${dist}/assets`)
const preloads = [/^sora-latin-800-normal-.*\.woff2$/, /^inter-latin-400-normal-.*\.woff2$/]
  .map((re) => assets.find((f) => re.test(f)))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

for (const { page, file } of pages) {
  let html = readFileSync(`${dist}/${file}`, 'utf8')
  html = html.replace('<!--app-->', render(page))

  // Inline the stylesheet (about 5 kB gzipped) to remove a render-blocking request.
  html = html.replace(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/, (_, href) => {
    const css = readFileSync(`${dist}${href}`, 'utf8')
    return `<style>${css}</style>`
  })

  html = html.replace('</title>', `</title>\n    ${preloads}`)

  writeFileSync(`${dist}/${file}`, html)
  console.log(`Prerendered dist/${file}`)
}

rmSync('dist-ssr', { recursive: true, force: true })
