var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer')

/* GET home page. */
router.get('/', async function (req, res, next) {

  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--headless',
      '--hide-scrollbars',
      '--mute-audio'
    ],
    timeout: 60000
  })
  const page = await browser.newPage()
  // sayfayı aç
  await page.goto("https://www.xvideos.com/video51580569/_-_",
    {
      waitUntil: 'networkidle2'
    });
  let html = await page.evaluate(() => document.body.innerHTML, 15000);
  let split = html.split("html5player.setVideoUrlHigh('");
  let link = split[1].split("');")[0];
  res.render('index', { link });
});

module.exports = router;
// global-link