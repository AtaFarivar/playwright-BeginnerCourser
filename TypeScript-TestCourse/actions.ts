import { test, expect } from "@playwright/test";

// ══════════════ Actions ══════════════
test("actions test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  // تعریف locator
  const loginButton = page.getByRole("button", { name: "Login" });
  const usernameInput = page.getByPlaceholder("Username");
  const checkbox = page.getByRole("checkbox", { name: "I agree" });
  const dropdown = page.locator(".product_sort_container");

  // کلیک
  await loginButton.click();

  await loginButton.dblclick(); // دابل‌کلیک

  await loginButton.click({ button: "right" }); // راست‌کلیک

  await usernameInput.fill("");

  // تایپ
  await usernameInput.fill("standard_user"); //  پر کردن و تایپ کردن یه فرم, خودش پاک میکنه فرم رو بعد مینویسه
  await usernameInput.pressSequentially("_Testland"); //پر کردن و تایپ کردن یه فرم,  با این تفاوت که متن جدید رو به انتهای متن قبلی اضافه میکنه
  await usernameInput.clear(); // پاک‌کردن

  //کیبورد

  await usernameInput.press("Enter"); // زدن یک کلید
  await usernameInput.press("Shift");

  // زدن یک کلید

  //Windows
  await usernameInput.press("Control+A"); // ترکیب کلید
  await usernameInput.press("Control+C"); // ترکیب کلید
  await usernameInput.press("Control+V"); // ترکیب کلید

  //MacOS
  await usernameInput.press("Meta+A"); // ترکیب کلید
  await usernameInput.press("Meta+C"); // ترکیب کلید
  await usernameInput.press("Meta+V"); // ترکیب کلید

  // چک‌باکس
  await checkbox.check();
  await checkbox.uncheck();

  // dropdown
  await dropdown.selectOption("item1");

  // سایر اکشن‌ها
  await loginButton.hover(); // بردن موس روی المنت
  await loginButton.scrollIntoViewIfNeeded(); // اسکرول تا المنت
  const usernameText = await loginButton.textContent(); // خوندن متن المنت
  const val = await usernameInput.inputValue(); // مقداری که کاربر تایپ می‌کنه رو میخونه

  console.log("text:", usernameText);
  console.log("value:", val);
});
