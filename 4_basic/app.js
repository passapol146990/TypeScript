"use strict";
// การสร้างตัวแปรง
let fname = "passapol";
let age = 19;
let pass = false;
let all; // ชนิดข้อมูลแบบใดก็ได้ ไม่แนะนำ อาจโดนฝังบอท
let allt; // ใช้แทน any จะดีกว่า any เพราะจะตรวจสอบข้อมูลก่อน
// การรับข้อมูลในฟังชันและเอาแค่ทศนิยม 2 ตำแหน่าง
function formatNumber(num) {
    // function formatNumber(num:any){ ทำงานได้สบาย
    return num.toFixed(2);
}
let money = "50.1213";
money = 50.3213;
if (typeof money == "number") {
    console.log(formatNumber(money));
}
// การบอกชนิดข้อมูลด้วย as,<>
let user;
user = "passapol";
// (user as string).toUpperCase()
user.toUpperCase();
// if else
let number = 5;
let result;
if (number % 2 === 0) {
    result = "odd";
}
else {
    result = "even";
}
result = (number % 2 == 0) ? "odd" : "even";
// การสร้าวฟัวชัน
function sayHi() {
    return "Hi";
}
console.log(sayHi);
