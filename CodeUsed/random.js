// Currently what I have that I believe should be a working setTimeout Loop. Need advice from the wizards. 
function myLoop() {
  setTimeout(function () {
    for (let i = 0; i < directions.length; i++) {
      if (directions[i].pos === "x") {
        if (directions[i].operator === "+") {
          moveRight = xPos += 20;
        }
        if (directions[i].operator === "-") {
          moveLeft = xPos -= 20;
        }
      }
      if (directions[i].pos === "y") {
        if (directions[i].operator === "+") {
          moveUp = yPos += 20;
        }
        if (directions[i].operator === "-") {
          moveDown = yPos -= 20;
        }
      }
      context.rect(xPos, yPos, 50, 50);
    }
  }, 3000);
}


//     if(e.keyCode==39){
//        moveRight = xPos+=20;
//    }
//    if(e.keyCode==37){
//        moveLeft xPos-=20;
// }
//    if(e.keyCode==38){
//        moveUp yPos-=20;
//    }
//    if(e.keyCode==40){
//        moveDown yPos+=20;
// } 



// Entire script file that I last ended with. Still could not get the  
// setTimeout function to work. So far, what I have only keeps the enter   
// button from doing anything at all and doesn't pop up with any errors. 

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

var i = 1;                                                                  


  
function recordMove(e){

        //alert(e.Code);
        //Move Right
    if(e.keyCode==39){
       
        let commandRight = {pos: 'x', operator: '+', value: 20}
        directions.push(commandRight)
        console.log(directions)
    }
    //Move Left
    if(e.keyCode==37){
        let commandLeft = {pos: 'x', operator: '-', value: 20}
        directions.push(commandLeft)
        console.log(directions)
}   
    // Move Up
    if(e.keyCode==38){
        let commandUp = {pos: 'y', operator: '-', value: 20}
        directions.push(commandUp)
        console.log(directions)
    }
    //Move Down
    if(e.keyCode==40){
        let commandDown = {pos: 'y', operator: '+', value: 20}
        directions.push(commandDown)
        console.log(directions)
}
    if(e.keyCode==13){
    function myLoop() {
        setTimeout(function () {
          for (let i = 0; i < directions.length; i++) {
            if (directions[i].pos === "x") {
              if (directions[i].operator === "+") {
                moveRight = xPos += 20;
              }
              if (directions[i].operator === "-") {
                moveLeft = xPos -= 20;
              }
            }
            if (directions[i].pos === "y") {
              if (directions[i].operator === "+") {
                moveUp = yPos += 20;
              }
              if (directions[i].operator === "-") {
                moveDown = yPos -= 20;
              }
            }
            context.rect(xPos, yPos, 50, 50);
          }
        //   if(e.keyCode==13) {
        //     myLoop();                
        //   }                          
        }, 3000);
        directions.length = 0;
      }
      myLoop();
    }
canvas.width=canvas.width;
context.rect(xPos, yPos, 50, 50);
context.stroke();

}

document.onkeydown = recordMove;





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