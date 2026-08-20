import puppeteer from 'puppeteer'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { readFileSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlPath = resolve(__dirname, '../public/resume/Bhavyadeep_Kaur_Resume.html')
const pdfPath = resolve(__dirname, '../public/resume/Bhavyadeep_Kaur_Resume.pdf')

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()

const html = readFileSync(htmlPath, 'utf-8')
await page.setContent(html, { waitUntil: 'networkidle0' })

await page.pdf({
  path: pdfPath,
  format: 'Letter',
  margin: { top: '0.5in', right: '0.6in', bottom: '0.5in', left: '0.6in' },
  printBackground: true,
})

await browser.close()
console.log(`PDF saved: ${pdfPath}`)
