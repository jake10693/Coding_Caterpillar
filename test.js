var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');
var ctx;
var WIDTH = 300;
var HEIGHT = 800;
var img = new Image();
var collision = 0;

let xPos = 0;
let yPos = 0;
const directions = [];
let moveRight;
let moveLeft;
let moveUp;
let moveDown;

// function rect(x,y,w,h) {
//     ctx.beginPath();
//     ctx.rect(x,y,w,h);
//     ctx.closePath();
//     ctx.fill();
//     }

//     function clear() {
//         ctx.clearRect(0, 0, WIDTH, HEIGHT);
//         ctx.drawImage(img, 0, 0);
//         }

context.rect(xPos, yPos, 50, 50);
context.stroke();

// function init() {
//     canvas = document.getElementById("canvas");
//     ctx = canvas.getContext("2d");
//     img.src = "./Assets/Map1.png";
//     return setInterval(draw, 10);
//     }


function recordMove(e){

        //Move Right
    if(e.keyCode==39){
        let commandRight = {pos: 'x', operator: '+'}
        directions.push(commandRight)
        console.log(directions)
    }   
    //Move Left
    if(e.keyCode==37){
        let commandLeft = {pos: 'x', operator: '-'}
        directions.push(commandLeft)
        console.log(directions)
}   
    // Move Up
    if(e.keyCode==38){
        let commandUp = {pos: 'y', operator: '-'}
        directions.push(commandUp)
        console.log(directions)
    }
    //Move Down
    if(e.keyCode==40){
        let commandDown = {pos: 'y', operator: '+'}
        directions.push(commandDown)
        console.log(directions)
}
    if(e.keyCode==13)
    {
        directions.forEach((direction, i) => {
            setTimeout(() => {
                
                { 
                    if(direction.pos === 'x'){
                        if(direction.operator === '+'){
                            moveRight = xPos+=50
                        }
                        if(direction.operator === '-'){
                            moveLeft = xPos-=50
                        }
                    }                       
                    if(direction.pos === 'y'){
                            if(direction.operator === '+'){
                                moveUp = yPos+=50
                            }
                            if(direction.operator === '-'){
                                moveDown = yPos-=50
    
                        }
    
                    }
                    context.rect(xPos, yPos, 50, 50);
                    context.stroke();
                }
            },i * 500)
        })
            
        function checkcollision() {
            var imgd = ctx.getImageData(x, y, 15, 15);
            var pix = imgd.data;
            for (var i = 0; n = pix.length, i < n; i += 4) {
            if (pix[i] == 0) {
            collision = 1;
            }
            }
            }
            
            // directions.splice(0, directions.length)
            directions.length = 0
    }
//     function draw() {
// clear();
// ctx.fillStyle = "purple";
// rect(x, y, 15,15);
// }

canvas.width=canvas.width;
context.rect(xPos, yPos, 50, 50);
context.stroke();

}

document.onkeydown = recordMove;