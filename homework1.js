// 1. გამოაცხადეთ ორი ცვლადი a,b მიანიჭეთ მნიშვნელობები 23 და 4
let a = 23;
let b = 4;

// 2. დაბეჭდეთ (console.log) a და b რიცხვების ჯამი
console.log(a + b);

// 3. დაბეჭდეთ a და b რიცხვების ნამრავლი
console.log(a * b);

// 4. გამოაცხადეთ ახალი ცვლადი c რომელიც იქნება boolean, მიანიჭეთ true და დაბეჭდეთ
let c = true;
console.log(c);

// 5. გამოაცხადეთ ახალი ობიექტის (object) ტიპის ცვლადი person თქვენი მონაცემებით 
//(first name, last name, age, address) რომელიც შეიცავს: city, country, phone no, email, friends (სახელების სია)
let person = {
    "Name": "Zviadi",
    "LastName": "Meore Sixaruli",
    "Age": 32,
    "Address": {
        "City": "Tbilisi",
        "Country": "Georgia"
    },
    "PhoneNo": "558585858",
    "Email": "z.ezugbaia@gmail.com",
    "Friends": ["Dato", "Vazha", "Vaxtangi"]
};

// 6. დაბეჭდეთ person ობიექტის სახელი და მეორე მეგობრის სახელი
console.log(person.Name, person.LastName);
console.log(person.Friends[1]);