const puppeteer = require('puppeteer');
let page;
let browser;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    devtools: true,
  });
  page = await browser.newPage();
  await page.goto('http://localhost:9000');
});

test('popover button exists', async () => {
  const button = await page.$('#popover-button');
  expect(button).toBeTruthy();
});

test('popover content visibility toggles on button click', async () => {
  let popoverButton = await page.$('#popover-button');

  await popoverButton.click();
  let popoverContentVisible = await page.evaluate(() => {
    let styles = window.getComputedStyle(document.querySelector('#popover-content'));
    return styles.display;
  });
  expect(popoverContentVisible).toBe('block');

  await popoverButton.click();
  let popoverContentHidden = await page.evaluate(() => {
    let styles = window.getComputedStyle(document.querySelector('#popover-content'));
    return styles.display;
  });
  expect(popoverContentHidden).toBe('none');
});

afterEach(async () => {
  await browser.close();
});