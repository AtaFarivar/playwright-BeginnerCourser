import { test, expect } from "@playwright/test";

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("https://www.saucedemo.com");
  });

  test("Successful login", async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    const usernameInput = page.getByPlaceholder("Username");
    const passwordInput = page.getByPlaceholder("Password");
    const loginBtn = page.locator('[data-test="login-button"]');

    await usernameInput.fill("standard_user");
    await expect(usernameInput).toHaveValue("standard_user");
    await passwordInput.fill("secret_sauce");
    await expect(passwordInput).toHaveValue("secret_sauce");

    await expect(loginBtn).toBeVisible({ timeout: 15_000 });
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();
  });

  test("Successful login", async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    const usernameInput = page.getByPlaceholder("Username");
    const passwordInput = page.getByPlaceholder("Password");
    const loginBtn = page.locator('[data-test="login-button"]');

    await usernameInput.fill("standard_user");
    await expect(usernameInput).toHaveValue("standard_user");
    await passwordInput.fill("secret_sauce");
    await expect(passwordInput).toHaveValue("secret_sauce");

    await expect(loginBtn).toBeVisible({ timeout: 15_000 });
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();
  });
  test("Successful login", async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    const usernameInput = page.getByPlaceholder("Username");
    const passwordInput = page.getByPlaceholder("Password");
    const loginBtn = page.locator('[data-test="login-button"]');

    await usernameInput.fill("standard_user");
    await expect(usernameInput).toHaveValue("standard_user");
    await passwordInput.fill("secret_sauce");
    await expect(passwordInput).toHaveValue("secret_sauce");

    await expect(loginBtn).toBeVisible({ timeout: 15_000 });
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();
  });
  test("Successful login", async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    const usernameInput = page.getByPlaceholder("Username");
    const passwordInput = page.getByPlaceholder("Password");
    const loginBtn = page.locator('[data-test="login-button"]');

    await usernameInput.fill("standard_user");
    await expect(usernameInput).toHaveValue("standard_user");
    await passwordInput.fill("secret_sauce");
    await expect(passwordInput).toHaveValue("secret_sauce");

    await expect(loginBtn).toBeVisible({ timeout: 15_000 });
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();
  });
  test("Successful login", async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    const usernameInput = page.getByPlaceholder("Username");
    const passwordInput = page.getByPlaceholder("Password");
    const loginBtn = page.locator('[data-test="login-button"]');

    await usernameInput.fill("standard_user");
    await expect(usernameInput).toHaveValue("standard_user");
    await passwordInput.fill("secret_sauce");
    await expect(passwordInput).toHaveValue("secret_sauce");

    await expect(loginBtn).toBeVisible({ timeout: 15_000 });
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();
  });
  test("Successful login", async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    const usernameInput = page.getByPlaceholder("Username");
    const passwordInput = page.getByPlaceholder("Password");
    const loginBtn = page.locator('[data-test="login-button"]');

    await usernameInput.fill("standard_user");
    await expect(usernameInput).toHaveValue("standard_user");
    await passwordInput.fill("secret_sauce");
    await expect(passwordInput).toHaveValue("secret_sauce");

    await expect(loginBtn).toBeVisible({ timeout: 15_000 });
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();
  });
  test("Successful login", async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");

    await usernameInput.fill("standard_user");
    await expect(usernameInput).toHaveValue("standard_user");
    await passwordInput.fill("secret_sauce");
    await expect(passwordInput).toHaveValue("secret_sauce");

    await expect(loginBtn).toBeVisible({ timeout: 15_000 });
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();
  });
  test("Successful login", async ({ page }) => {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");

    await usernameInput.fill("standard_user");
    await expect(usernameInput).toHaveValue("standard_user");
    await passwordInput.fill("secret_sauce");
    await expect(passwordInput).toHaveValue("secret_sauce");

    await expect(loginBtn).toBeVisible({ timeout: 15_000 });
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();
  });
});
