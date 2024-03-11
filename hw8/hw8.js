// 1. გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი
let a = 87;
let b = 65;
console.log(a + b);

// 2. გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks
let student = {
    firstName: "Zviadi",
    lastName: "Meore Sixaruli",
    age: 32,
    email: "z.ezugbaia@gmail.com",
    marks: [94, 79, 81, 98]
};
// 3. დაბეჭდეთ student ის სახელი
console.log(student.firstName);

// 4. გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n
let m = 45;
let n = 23;
if (m > n) {
    console.log(m + n);
} else {
    console.log(n);
}

// 5. გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. 
// დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )
let studentName = "Zviadi";
console.log("Rise and shine,", studentName, "!");

// 6. გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა
// დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. 
// დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)
let salary = 800;
let bonus;
if (salary >= 2000) {
    bonus = 0;
} else {
    bonus = 0.1 * salary;
}
console.log("Bonus: ", bonus);

// 7. გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.
let c = 23;
let d = c / 2;
let e = c + d;
console.log(e);

// 8. გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.
let phones = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
console.log(phones);

// 9. Phones მასივს ბოლოში დაამატეთ ახალი ელემენტი Motorola და დაბეჭდეთ მასივი
phones.push("Motorola");
console.log(phones);

// 10. Დაბეჭდეთ რიცხვები 1 დან ( 1 შედის) 12-ის ჩათვლით.
let i;
for (i = 1; i <= 12; i++) {
    console.log(i);
}