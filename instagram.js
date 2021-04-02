const puppeteer = require("puppeteer");

(async () => {
 const browser = await puppeteer.launch({ headless: false });
 const page = await browser.newPage();
 await page.goto("https://www.storeavenuedesarts.com/");
 let click = await page.$x(
  '//*[@id="shopify-section-featured-collections"]/div/div[2]/div[2]/div/a/div[1]'
 );
 await click[0].click();
 await page.waitForTimeout(1000);
 let click2 = await page.$x('//*[@id="AddToCart-product-template"]');
 await click2[0].click();
 await page.waitForTimeout(1000);
 let click3 = await page.$x(
  "/html/body/div[3]/main/div/div/form/footer/div/div/input[2]"
 );
 await click3[0].click();
 await page.waitForTimeout(3000);
 await page.type('input[name="checkout[email]"]', "Cecssastro10@yahoo.com", {
  delay: 0,
 });
 await page.type(
  'input[name="checkout[shipping_address][first_name]"]',
  "Cesaaaf",
  {
   delay: 10,
  }
 );
 await page.type(
  'input[name="checkout[shipping_address][last_name]"]',
  "CASTTT",
  {
   delay: 10,
  }
 );
 await page.type(
  'input[name="checkout[shipping_address][address1]"]',
  "1000 poop street",
  {
   delay: 10,
  }
 );
})();
