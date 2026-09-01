# همه‌ی تست‌ها (headless)
npx playwright test

# با باز شدن مرورگر
npx playwright test --headed

// اجرا کردن یک تست خاص روی مرورگر موردنظر
npx playwright test base.spec.ts --headed --project=chromium

# فقط یک فایل
npx playwright test cart.spec.ts --headed



# فقط یک تست خاص (بر اساس بخشی از نامش)
npx playwright test -g "add to cart"

# دیدن گزارش HTML
npx playwright show-report