import { test, expect } from "@playwright/test";

// ══════════════ Assertions ══════════════
test("assertions test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // تعریف locatorها
  const productsTitle = page.getByText("Products");
  const inventoryItem = page.locator(".inventory_item");
  const firstItemName = page.locator(".inventory_item_name").first();
  const cartBadge = page.locator(".shopping_cart_badge");
  const loginButton = page.getByRole("button", { name: "Login" });
  const usernameInput = page.getByPlaceholder("Username");
  const addToCart = page.getByRole("button", { name: "Add to cart" }).first();

  // ==========================================
  // ۱) حالت‌های مثبت (Positive Matchers)
  // ==========================================

  // المان در DOM هست + توسط کاربر دیده می‌شه (بدون display:none، opacity:0 و...)
  await expect(productsTitle).toBeVisible();

  // المان در DOM وجود داره (مهم نیست دیده می‌شه یا نه، مثلاً ممکنه مخفی باشه)
  await expect(productsTitle).toBeAttached();

  // ==========================================
  // ۲) حالت‌های منفی (Negative Matchers)
  // ==========================================

  // کاربر نباید المان رو ببینه
  await expect(cartBadge).not.toBeVisible();

  // المان کلاً نباید توی ساختار DOM وجود داشته باشه (اگه باشه ولی مخفی باشه، Fail می‌شه)
  await expect(cartBadge).not.toBeAttached();

  // ── ۳) متن ──

  await expect(firstItemName).toHaveText("Test Land 2026"); //  دقیقاً عین متن رو باید شامل بشه
  await expect(firstItemName).toContainText("İphone 17 pro max-red 256gb"); // یک قسمت از متن رو شامل بشود
  await expect(firstItemName).not.toHaveText("code BG-1234"); // شامل نشود

  // ── ۴) تعداد ──
  await expect(inventoryItem).toHaveCount(7); // دقیقاً ۶ تا
  await expect(productsTitle).toHaveCount(0); // هیچی پیدا نشد

  // ── ۵) وضعیت دکمه ──
  await expect(addToCart).toBeEnabled(); // فعاله، می‌شه کلیک کرد
  await expect(loginButton).toBeDisabled(); // غیرفعاله

  // ── ۶) مقدار داخل input ──
  await page.goto("https://www.saucedemo.com");
  await usernameInput.fill("standard_user");
  await expect(usernameInput).toHaveValue("standard_user"); // مقدار داخل فیلد
  await expect(usernameInput).not.toHaveValue(""); // فیلد خالی نیست

  // ── ۷) آدرس و عنوان صفحه ──
  await page.goto("https://www.saucedemo.com");

  await expect(page).toHaveURL(/saucedemo/); // آدرس شامل inventory
  await expect(page).toHaveURL("https://www.saucedemo.com"); // آدرس دقیق
  await expect(page).toHaveTitle("فروشگاه اینترنتی دیجی‌کالا"); // عنوان صفحه
});
