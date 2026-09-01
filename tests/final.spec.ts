import { test, expect, type Locator, type Page } from "@playwright/test";
import * as fs from "fs";

test.describe("Login and buy", () => {
  let usernameInput: Locator;
  let passwordInput: Locator;
  let loginButton: Locator;
  let errorMessage: Locator;
  let product: Locator;
  let firstItem: Locator;
  let productName: Locator;
  let productPrice: Locator;
  let addToCart: Locator;
  let basket: Locator;
  let removeBtn: Locator;
  let productItem: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    usernameInput = page.getByPlaceholder("Username");
    passwordInput = page.getByPlaceholder("Password");
    loginButton = page.getByRole("button", { name: "Login" });
    errorMessage = page.locator('[data-test="error"]');
    product = page.getByText("Products");
    firstItem = page.locator('[data-test="inventory-item-name"]').nth(1);
    productName = page.locator('[data-test="inventory-item-name"]').first();
    productPrice = page.locator('[data-test="inventory-item-price"]').first();
    addToCart = page.getByRole("button", { name: "Add to cart" });
    basket = page.locator('[data-test="shopping-cart-link"]');
    removeBtn = page.getByRole("button", { name: "Remove" });
    productItem = page.locator(".cart_item_label");
  });

  test("1-Unsuccessful Login-empty filed ", async ({ page }) => {
    await usernameInput.fill("");
    await passwordInput.fill("");

    await expect(usernameInput).toHaveValue("");
    await expect(passwordInput).toHaveValue("");
    await expect(loginButton).toBeEnabled();
    await loginButton.click();

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText("Epic sadface: Username is required");
  });

  test("2-wrong password ", async ({ page }) => {
    await usernameInput.fill("standard_user");
    await passwordInput.fill("123456");

    await expect(usernameInput).toHaveValue("standard_user");
    await expect(passwordInput).toHaveValue("123456");
    await expect(loginButton).toBeEnabled();
    await loginButton.click();

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  test("3-special char", async ({ page }) => {
    await usernameInput.fill("mehrdad");
    await passwordInput.fill("");

    await expect(usernameInput).toHaveValue("mehrdad");
    await expect(passwordInput).toHaveValue("");
    await expect(loginButton).toBeEnabled();
    await loginButton.click();

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText("Epic sadface: Password is required");
  });

  async function loginSuccessfully(page: Page) {
    await usernameInput.fill("standard_user");
    await passwordInput.fill("secret_sauce");
    await expect(usernameInput).toHaveValue("standard_user");
    await expect(passwordInput).toHaveValue("secret_sauce");
    await expect(loginButton).toBeEnabled();
    await loginButton.click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(product).toBeVisible();
  }

  test("4-Successful Login", async ({ page }) => {
    await loginSuccessfully(page);
  });

  test("5-Add product to cart and verify  info", async ({ page }) => {
    await loginSuccessfully(page);

    await firstItem.click();
    await expect(page).toHaveURL(/inventory-item/);

    await expect(productName).toBeVisible();
    await expect(productPrice).toBeVisible();
    await expect(addToCart).toBeVisible();

    //get the name and price
    const actualName = await productName.textContent();
    const actualPrice = await productPrice.textContent();

    console.log("Product name: ", actualName);
    console.log("Product price: ", actualPrice);

    await expect(addToCart).toBeEnabled();
    await addToCart.click();

    //navigate to the basket
    await expect(basket).toBeEnabled();
    await basket.click();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

    const expectedName = await productName.textContent();
    const expectedPrice = await productPrice.textContent();

    const content = `
Product Details
===============
Actual name:     "${actualName}"
Expected name:   "${expectedName}"
Actual price:    "${actualPrice}"
Expected price:  "${expectedPrice}"
Date:            ${new Date().toLocaleString()}
`;

    fs.writeFileSync("product-details.txt", content);

    //compare actual with expected
    expect(actualName).toBe(expectedName);
    expect(actualPrice).toBe(expectedPrice);

    //remove the product from basket
    await expect(removeBtn).toBeEnabled();
    await removeBtn.click();

    //check the remove of the product
    await expect(productItem).not.toBeVisible();
  });
});
