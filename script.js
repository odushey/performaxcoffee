const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.setViewport({width: 1400, height: 900});
  await page.goto('http://127.0.0.1:8080/index.html');
  
  const rects = await page.evaluate(() => {
    return {
      bodyWidth: document.body.clientWidth,
      pricingContainerRect: document.querySelector('#pricing .container').getBoundingClientRect(),
      pricingCardsRect: document.querySelector('.pricing-cards').getBoundingClientRect(),
      headlineRect: document.querySelector('#pricing .section-headline').getBoundingClientRect(),
      counterContainerRect: document.querySelector('#counter-bar .container').getBoundingClientRect(),
      heroContainerRect: document.querySelector('.hero-section .container').getBoundingClientRect()
    };
  });
  console.log(JSON.stringify(rects, null, 2));
  
  await browser.close();
})();
