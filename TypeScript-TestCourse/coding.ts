const firstName = "jbcjscb "; // string — متن (داخل '' یا "")

const age = 30; // number — عدد
const isReady = true; // boolean — درست یا غلط (true/false)
const price = 29.99; // number — عدد اعشاری هم number ـه
locator;
Page;
console.log(firstName); // TestLand ""
console.log(age); // 30
console.log(isReady); // true
console.log(price); // 29.99

/////
const let;

// const — مقدارش بعد از تعریف دیگه عوض نمی‌شه
const city = "Istanbul";
city = "Tehran"; // ❌ خطا! نمی‌شه عوض کرد

let yourName = "ata";
yourName = "ali";
yourName = "sara";
console.log(yourName);

console.log("wellcome " + yourName);
//wellcome sara

// let — مقدارش می‌تونه بعداً عوض بشه
let score = 0;
score = 10; // ✅ اوکیه
score = 20; // ✅ باز هم اوکیه
console.log(score);

//////

// چاپ کردن
console.log(productName); // Sauce Labs Backpack

/////
// تعریف تابع — یه‌بار می‌نویسیش

function greet() {
  console.log("Hi!!");
  console.log("Wellcome.");
}

// استفاده از تابع — هر وقت لازم شد صداش می‌زنی
greet(); // چاپ می‌کنه: سلام! خوش اومدی
greet(); // دوباره چاپ می‌کنه
///
// این تابع یه اسم می‌گیره و سلام می‌ده
function greet1(name: string, lastName: string) {
  console.log("Hi " + name + lastName + "Wellcome to your dashboard.");
}

greet1("Ata farivar"); // Hi Ata farivar Wellcome to your dashboard.
greet1("Ali mohammadi"); // Hi Ali Wellcome to your dashboard.
//////

// این تابع دو عدد می‌گیره و جمعشون رو برمی‌گردونه
function add(a: number, b: number): number {
  return a + b;
}
add(5, 6); // 11
const result = add(5, 3);
console.log(result); // 8

let studentName = "Ata";
studentName = "Ali";
studentName = "20";
console.log("the student name is: " + studentName);
