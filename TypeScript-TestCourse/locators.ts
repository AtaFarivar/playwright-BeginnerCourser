// 1) Role — بهترین
// name — با متن یا label المنت

page.getByRole("button", { name: "Login" });

page.getByRole("button", { name: "login-button" });

// exact — نه یکی که «شامل» Login باشه، دقیقاً همین
page.getByRole("button", { name: "Login", exact: true });

// checked — چک‌باکس/رادیویی که تیک‌خورده باشه
page.getByRole("checkbox", { checked: true });

// disabled — المنتی که غیرفعاله
page.getByRole("button", { disabled: true });

// selected — گزینه‌ی انتخاب‌شده‌ی dropdown
page.getByRole("option", { selected: true });

// pressed — دکمه‌ای که فشرده مونده (toggle)
page.getByRole("button", { pressed: true });

//2- Label — پیدا کردن فیلد با برچسبش
page.getByLabel("Email address");
page.getByLabel("Password", { exact: true });

// 3-Placeholder — پیدا کردن فیلد با placeholder ش
page.getByPlaceholder("Enter your name");

// 4-Text — پیدا کردن با متن روی صفحه
page.getByText("Add to cart");
page.getByText("Add", { exact: true }); // دقیقاً همین متن، نه Add to cart
page.getByText(/^Add/); // با regex — شروع با Add

// 5-TestId — پیدا کردن با data-testid یا data-test
page.getByTestId("login-button");

// 6) CSS
page.locator(".inventory_item");
page.locator("#user-name");
page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
page.locator('[type="submit"]');
page.locator('[placeholder="Username"]');
page.locator('[name="email"]');

////
const items1 = page.locator(".inventory_item").first(); // اولی
const items2 = page.locator(".inventory_item").last(); // آخری
const items3 = page.locator(".inventory_item").nth(4
  
); 


page.getByRole('button', { name: 'Add to cart' }).nth(4);


ali ata mona hana parastou 
0.    1 2     3     4






const items = page.locator(".inventory_item")
const n = await items.count(); // تعداد کل
