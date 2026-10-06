// Builds raster brand images from the official logo files. Run: node scripts/brand-images.mjs
import sharp from 'sharp'

const kit = '../Proceed_Brand_Kit'
const NAVY = '#0B2559'

// Apple touch icon from the navy app icon.
await sharp(`${kit}/01_Logo_Mark/PNG/proceed-app-icon-navy.png`)
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png')

// Open Graph image: the white logo centred on navy, 1200x630.
const logo = await sharp(`${kit}/02_Logo/SVG/proceed-logo-white.svg`, { density: 300 })
  .resize({ width: 640 })
  .png()
  .toBuffer()

await sharp({ create: { width: 1200, height: 630, channels: 3, background: NAVY } })
  .composite([{ input: logo, gravity: 'center' }])
  .png()
  .toFile('public/og-image.png')

console.log('Wrote public/apple-touch-icon.png and public/og-image.png')
