"use strict";
// function greet(firstName: string){
//     console.log("Hello " + firstName);
// }
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed === Direction.up) {
        console.log("Moving Up");
    }
}
doSomething(Direction.up); // Moving Up
doSomething(Direction.down); // Moving Down
