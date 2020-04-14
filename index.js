const puppeteer = require("puppeteer");

module.exports = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  let elems = [];
  // get all p elements
  elems = await page.evaluate(() => {
    let elemsArr = [];
    document.querySelectorAll("p").forEach((e) => {
      elemsArr.push(e.innerText);
    });
    return elemsArr;
  });

  const jobDesc = elems.join(" ");
  let counter = 0;
  let flagsFound = [];
  let redflags = [
    "ninja",
    "unicorn",
    "fast-paced environment",
    "magic",
    "work hard, play hard",
    "rockstar",
    "family",
    "wear multiple hats",
    "disrupt",
    "earning potential",
    "possibility of becoming full-time",
    "guru",
  ];

  for (flag of redflags) {
    if (jobDesc.includes(flag)) {
      counter++;
      flagsFound.push(flag);
    }
  }
  await browser.close();

  return {
    flagsFound,
    rate: (counter / redflags.length) * 100 + "%",
  };
};