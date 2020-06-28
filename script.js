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

        function recordMove(e){

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
            if(e.keyCode==13)
            {
                for (let i = 0; i < directions.length; i++)
                    { 
                        if(directions[i].pos === 'x'){
                            if(directions[i].operator === '+'){
                                moveRight = xPos+=20
                                context.rect(xPos, yPos, 50, 50);
                                context.stroke();
                            }
                            if(directions[i].operator === '-'){
                                moveLeft = xPos-=20
                                context.rect(xPos, yPos, 50, 50);
                                context.stroke();
                            }
                        }                       
                        if(directions[i].pos === 'y'){
                                if(directions[i].operator === '+'){
                                    moveUp = yPos+=20
                                    context.rect(xPos, yPos, 50, 50);
                                     context.stroke();
                                }
                                if(directions[i].operator === '-'){
                                    moveDown = yPos-=20
                                    context.rect(xPos, yPos, 50, 50);
                                    context.stroke();

                            }

                        }
                        context.rect(xPos, yPos, 50, 50);
                        context.stroke();
                    }
                    
                        
                    
                    // directions.splice(0, directions.length)
                    directions.length = 0
            }
        
        canvas.width=canvas.width;
        context.rect(xPos, yPos, 50, 50);
        context.stroke();
        
    }
    
    document.onkeydown = recordMove;