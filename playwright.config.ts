import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  // ── تنظیمات سطح test runner ──
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },

  // ── Reporter ──
  reporter: [["list"], ["html", { open: "never" }], ["allure-playwright"]],

  // ── تنظیمات مشترک همه‌ی تست‌ها ──
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 15_000,
    navigationTimeout: 45_000,
    headless: !!process.env.CI,
    viewport: { width: 1440, height: 900 },
  },

  // ── مرورگرها ──
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});
