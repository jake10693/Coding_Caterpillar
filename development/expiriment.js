var myGamePiece;
var myObstacle;
const directions = [];
let moveRight;
let moveLeft;
let moveUp;
let moveDown;

function startGame() {
    myGamePiece = new component(50, 50, "red", -1, 99);
    myObstacle  = new component(50, 200, "green", 300, 100);
 // Code needed here to clear text area content on restart
 // Code needed here to clear the directions array on restart
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth/1.1;
        this.canvas.height = window.innerHeight/1.2;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    if (myGamePiece.crashWith(myObstacle)) {
        myGameArea.stop();
    } else {
        // myGameArea.clear();
        myObstacle.update();
        myGamePiece.x;
        myGamePiece.y;    
        myGamePiece.update();
    }
}

function moveup() {
    myGamePiece.y -= 50; 
}

function movedown() {
    myGamePiece.y += 50; 
}

function moveleft() {
    myGamePiece.x -= 50; 
}

function moveright() {
    myGamePiece.x += 50; 
}

function recordMove(e){

    //Move Right
    if(e.keyCode==39){
        let textArea = document.getElementById('userDirections');
        let commandRight = {pos: 'x', operator: '+'}
        directions.push(commandRight)
        // console.log(directions)
        textArea.value = JSON.stringify(directions)
        
        
    }
    //Move Left
    if(e.keyCode==37){
        let commandLeft = {pos: 'x', operator: '-'}
        let textArea = document.getElementById('userDirections');
        directions.push(commandLeft)
        console.log(directions)
        textArea.value = JSON.stringify(directions)
    }   
    // Move Up
    if(e.keyCode==38){
        let commandDown = {pos: 'y', operator: '-'}
        let textArea = document.getElementById('userDirections');
        directions.push(commandDown)
        console.log(directions)
        textArea.value = JSON.stringify(directions)
    }
    //Move Down
    if(e.keyCode==40){
        let commandUp = {pos: 'y', operator: '+'}
        let textArea = document.getElementById('userDirections');
        directions.push(commandUp)
        console.log(directions)
        textArea.value = JSON.stringify(directions)
    }
    if(e.keyCode==13)
        {
            directions.forEach((direction, i) => {
                setTimeout(() => {
                    
                    { 
                        if(direction.pos === 'x'){
                            if(direction.operator === '+'){
                                moveright()
                            }
                            if(direction.operator === '-'){
                                moveright()
                            }
                        }                       
                        if(direction.pos === 'y'){
                                if(direction.operator === '+'){
                                    movedown()
                                }
                                if(direction.operator === '-'){
                                    moveup()
        
                            }
        
                        }
                        // context.rect(xPos, yPos, 50, 50);
                        // context.stroke();
                    }
                },i * 500)
            })
                
                directions.length = 0
        }
    }
    document.onkeydown = recordMove;