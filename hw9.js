/*
1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) და დააბრუნებს შესაბამისს ტექსტს 
    a. თუ ტიცხვები ტოლია : a  და b ტოლია
    b. თუ a მეტია b ze : a  მეტია b -ზე
    c. თუ a ნაკლებია  b ze : a  ნაკლებია  b -ზე
*/
function compNumbers() {
    let a = 24;
    let b = 33;
    
    if (a === b) {
        return `${a} and ${b} are equal`;
    } else if (a > b) {
        return `${a} is greater than ${b}`;
    } else {
        return `${a} is less than ${b}`;
    }
}
console.log(compNumbers());


//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ true თუ მათი ჯამი მეტია 100 ზე , false , თუ არ არის მეტი 100 ზე
    
function sum () { 
    let a = 50;
    let b = 60;   
        if (a + b > 100)
            return true;
        else 
            return false;
}
console.log(sum());

/*
3. დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას აღებულ ქულას ( ქულების ჯამს). ფუნქციას აქვს სამი პარამეტრი
    a. პირველი პარამეტრი - 1 ქულიანების რაოდენობა
    b. მეორე პარამეტრი -  2 ქულიანების რაოდენობა
    c. მესამე - 3 ქულიანების რაოდენობა
*/
function score (points1, points2, points3) {
    return points1 + (points2 * 2) + (points3 * 3);
}
let totalScore = score (6, 4, 2);
console.log(totalScore);

// 4. დაწერეთ ფუნქცია ორი პარამეტრით start და end , ფუნქციას გადაეცემა ორი რიცხვი, უნდა შექმნათ start დან end-ჩათვლით რიცხვების მასივი
//    (მაგალითად თუ start არის 3 და end არის 6 მასივის ელემენტები უნდა იყოს [3,4,5,6] ) ( arr.push()- მასივში ელემენტის დამატება)
function array (start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
const result = array (1, 10);
console.log(result);


/*
5. ობიექტ person - ს აქვს შემდეგი properties: firstname, lastname, age, დაწერეთ ფუნქცია რომელიც პერსონის ასაკის მიხედვით დაბეჭდავს 
    a. თუ 18  წელზე პატარაა - “პერსონის სახელი” არასრულწლოვანია
    b. თუ 18 და მეტია “პერსონის სახელი” - სრულწლოვანია 
*/
let person = {
    firstname: "Zviadi",
    lastname: "Ezugbaia",
    age: 32
}
let person1 = {
    firstname: "Sandro",
    lastname: "Ezugbaia",
    age: 4
}

function isadult (age) {
    if (age >= 18)
        return "Is an Adult"
    else 
        return "Is a Minor"
}
console.log(person.firstname,isadult(person.age))
console.log(person1.firstname,isadult(person1.age))


// 6. გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ. Დაბეჭდეთ ელემენტები სათითაოდ ( გამოიყენეთ for ციკლი)

const phones = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
for (let i = 0; i < phones.length; i++) {
    console.log(phones[i]);
}


// 7. Გამოაცხადეთ ცვლადი num სასურველი მნიშვნელობით ( მაგ. 23), დაბეჭდეთ რიცხვები 1 დან num ის ჩათვლით ( გამოიყენეთ while ციკლი).

let num = 7;
let i = 1;
while (i <= num) {
    console.log(i);
    i++;
}


// 8. Გამოიყენეთ სასურველი ციკლი და დაბეჭდეთ ლუწი რიცხვები 2-დან 13 - ის ჩათვლით , გამოიყენეთ სასურველი ციკლი (for, while)
for (let i = 2; i <= 13; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}