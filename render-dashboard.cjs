const path = require("path");

(async () => {
  const { chromium } = require("playwright");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 980 } });
  const filePath = path.resolve("outputs/life-dashboard/index.html").replace(/\\/g, "/");
  await page.goto(`file:///${filePath}`);
  await page.screenshot({ path: "outputs/life-dashboard/preview-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.screenshot({ path: "outputs/life-dashboard/preview-mobile.png", fullPage: true });
  await browser.close();
  console.log("rendered previews");
})();
