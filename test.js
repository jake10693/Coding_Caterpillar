var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

let xPos = 0;
let yPos = 0;
const directions = [];
let moveRight;
let moveLeft;
let moveUp;
let moveDown;


context.rect(xPos, yPos, 50, 50);
context.stroke();

function recordMove(e) {

    //alert(e.Code);
    //Move Right
    if (e.keyCode == 39) {

        let commandRight = { pos: 'x', operator: '+', value: 20 }
        directions.push(commandRight)
        console.log(directions)
    }
    //Move Left
    if (e.keyCode == 37) {
        let commandLeft = { pos: 'x', operator: '-', value: 20 }
        directions.push(commandLeft)
        console.log(directions)
    }
    // Move Up
    if (e.keyCode == 38) {
        let commandUp = { pos: 'y', operator: '-', value: 20 }
        directions.push(commandUp)
        console.log(directions)
    }
    //Move Down
    if (e.keyCode == 40) {
        let commandDown = { pos: 'y', operator: '+', value: 20 }
        directions.push(commandDown)
        console.log(directions)
    }
}
function myLoop() {
    setTimeout(function () {
        {
            // for (let i = 0; i < directions.length; i++)
            if (directions[i].pos === 'x') {
                if (directions[i].operator === '+') {
                    moveRight = xPos += 20
                    context.rect(xPos, yPos, 50, 50);
                    context.stroke();
                }
                if (directions[i].operator === '-') {
                    moveLeft = xPos -= 20
                    context.rect(xPos, yPos, 50, 50);
                    context.stroke();
                }
            }
            if (directions[i].pos === 'y') {
                if (directions[i].operator === '+') {
                    moveUp = yPos += 20
                    context.rect(xPos, yPos, 50, 50);
                    context.stroke();
                }
                if (directions[i].operator === '-') {
                    moveDown = yPos -= 20
                    context.rect(xPos, yPos, 50, 50);
                    context.stroke();

                }

            }
            i++;
            if (i < directions.length) {
                myLoop();
            }
        }, 3000)
}
}
if (e.keyCode == 13) {
    myLoop()
}


// directions.splice(0, directions.length)
directions.length = 0

document.onkeydown = recordMove;


// function myLoop() {           //  create a loop function
// setTimeout(function() {   //  call a 3s setTimeout when the loop is called
//   console.log('hello');   //  your code here
//   i++;                    //  increment the counter
//   if (i < 10) {           //  if the counter < 10, call the loop function
    // myLoop();             //  ..  again which will trigger another 
//   }                       //  ..  setTimeout()
// }, 3000)
// }



// enter = key code 13
//     Blocks of code that may come in handy during development        



//     if(e.keyCode==39){
//        moveRight = xPos+=20;
//    }
//    if(e.keyCode==37){
//        xPos-=20;
// }
//    if(e.keyCode==38){
//        yPos-=20;
//    }
//    if(e.keyCode==40){
//        yPos+=20;
// } 