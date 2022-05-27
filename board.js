class Board {
    ctx;
    grid;
    constructor(ctx) {
        this.ctx = ctx;
        this.grid = this.loadWhiteBoard();
        this.score = 0;
        this.gameOver= false;
        this.clearAudio = new Audio('souds/clear.mp3');
        this.dows = new Audio('souds/music.mp3');
        this.gameend = new Audio('souds/game-over.mp3');
    }
loadWhiteBoard(){
   return Array.from ({length:rows}, () => Array(cols).fill(white_colorid));
}
drawCell(x,y,colorid){
        if(colorid != null){
            this.ctx.fillStyle = color_map[colorid];
        }else {
            this.ctx.fillStyle = color_map[white_colorid];
        }
        this.ctx.fillRect(x*block_size,y*block_size,block_size,block_size);
        this.ctx.fillStyle = 'black';
        this.ctx.strokeRect(x*block_size,y*block_size,block_size,block_size);
}
drawBoard(){
        for ( let row=0;row<this.grid.length;row ++){
            for ( let col= 0; col <this.grid[0].length;col ++){
                this.drawCell(col,row,this.grid[row][col]);
            }
        }
}
handleCompleteRows (){
        let latestGrid = board.grid.filter((row) =>{
            return row.some(col => col === white_colorid);
        });
        let newScores = rows - latestGrid.length;
        let newRows = Array.from ({length:newScores}, () => Array(cols).fill(white_colorid));

        if(newScores){
            board.grid = [...newRows, ...latestGrid];
            this.handleScore(newScores * 10);

            this.clearAudio.play();
            console.log({latestGrid});
        }
}
handleScore(newScores){
       this.score += newScores;
        document.getElementById('score').innerHTML =this.score;

            if(this.score >= 50){
                id = setInterval(() => {
                    if(!board.gameOver){
                        brick.moveDown();
                    } else {
                        clearInterval(id);
                    }
                },1000);
            }

}
handleGameOver(){
        this.gameOver = true;
        this.gameend.play()
       alert("GAME OVER !!!!!!!")

    }
    reset(){
        this.score = 0;
        clearInterval(id);
        this.grid = this.loadWhiteBoard();
        this.gameOver = false;
        this.drawBoard();
        this.dows.play();
    }
}
let id;
