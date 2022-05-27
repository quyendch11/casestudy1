let board=new Board(ctx);
board.drawBoard();
document.getElementById("play").addEventListener('click', () => {
    board.reset();
    document.getElementById('score').innerHTML = 0;
    generateNewBrick();
   let refresh = setInterval(() => {
        if(!board.gameOver){
            brick.moveDown();
        } else {
            clearInterval(refresh);
        }
    },1000);
})
function move() {
    if(!board.gameOver){
        switch (event.keyCode) {
            case 37: {
                brick.moveLeft();
                break
            }
            case 38: {
                brick.rotate();
                break;
            }
            case 39: {
                brick.moveRight();
                break;
            }
            case 40: {
                brick.moveDown();
                break;
            }
        }
    }
}

