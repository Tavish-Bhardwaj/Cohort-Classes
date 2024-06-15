"use strict";
// function greet(firstName: string){
//     console.log("Hello " + firstName);
// }
// function sum (a: number, b: number): number{
//     return a + b;
// }
// const value = sum(2, 3);
// console.log(value);
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let legal = isLegal(20);
console.log(legal);
