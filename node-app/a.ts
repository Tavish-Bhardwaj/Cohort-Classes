// function greet(firstName: string){
//     console.log("Hello " + firstName);
// }

// function sum (a: number, b: number): number{
//     return a + b;
// }
// const value = sum(2, 3);
// console.log(value);

// function isLegal(age: number): boolean{
//     if(age >= 18){
//         return true;
//     }
//         else{
//             return false;
//         }
// }
// let legal = isLegal(20);
// console.log(legal);

type keyPressed = "up" | "down" | "left" | "right";
enum Direction{
    up,
    down,
    left,
    right
}

function doSomething(keyPressed: Direction){
    if(keyPressed === Direction.up){
        console.log("Moving Up");
    }
}

doSomething(Direction.up); // Moving Up
doSomething(Direction.down); // Moving Down



// Genric in typescript

function identity<T>(arg: T): T{
    return arg;
}
let output1= identity<string>("myString");
let output2 = identity<number>(100);