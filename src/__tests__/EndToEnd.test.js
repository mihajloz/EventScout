import puppeteer from "puppeteer";

describe("show/hide event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer
      .launch
      // {
      //   headless: false,
      //   slowMo: 300, //
      //   timeout: 0 // removes any puppeteer/browser timeout limitations
      // }
      ();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .event-description");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see details", async () => {
    await page.click(".event .show-details-button");
    const eventDetails = await page.$(".event .event-description");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .show-details-button");
    const eventDetails = await page.$(".event .event-description");
    expect(eventDetails).toBeNull();
  });
});
