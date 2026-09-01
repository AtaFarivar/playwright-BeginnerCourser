import { test, expect } from "@playwright/test";

test("navigation test", async ({ page }) => {
  // ۱) باز کردن سایت اول
  await page.goto("https://www.saucedemo.com/");

  await page.goto("https://www.saucedemo.com");-*

  // ۲) رفرش صفحه
  await page.reload();
  await page.reload();
  // ۳) رفتن به سایت دوم
  await page.goto("https://www.google.com");

  // ۴) برگشت به سایت اول (saucedemo)
  await page.goBack();
  await page.goBack();

  // ۵) رفتن به جلو (google)
  await page.goForward();
});

test("Tabs and Windows", async ({ page, context, browser }) => {
  // تب اول (همون page پیش‌فرض)
  await page.goto("https://www.google.com");

  // باز کردن یک تب جدید (کوکی مشترک با تب قبلی)
  const newTab = await context.newPage();
  await newTab.goto("https://www.yahoo.com");

  // باز کردن یک پنجره‌ی کاملاً جدا (کوکی و حافظه‌ی مستقل)
  const newWindow = await browser.newContext();
  const page2 = await newWindow.newPage();

  await page2.goto("https://www.bing.com");
});
// برمی‌گردیم به تب اول
await page.bringToFront();

// دوباره می‌رویم روی تب دوم
await newTab.bringToFront();
