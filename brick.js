class Brick {
    id;

    constructor(id) {
        this.id = id;
        this.layout = brick_layout[id];
        this.activeIndex = 0;
        this.colposition = 3;
        this.rowposition = -1;
        this.move = new Audio('souds/move.mp3');
        this.roi = new Audio('souds/roi.mp3')
    }

    draw() {
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== white_colorid) {
                    if (this.id === 1) {
                        board.drawCell(col + this.colposition, row + this.rowposition, 0);
                    } else {
                        board.drawCell(col + this.colposition, row + this.rowposition, this.id);
                    }
                }
            }
        }
    }

    clear() {
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== white_colorid) {
                    board.drawCell(col + this.colposition, row + this.rowposition, white_colorid);
                }
            }
        }
    }

    moveLeft() {
        this.move.play();
        if (!this.checkCollision(this.rowposition, this.colposition - 1, this.layout[this.activeIndex])) {
            this.clear()
            this.colposition--;
            this.draw();
        }
    }

    moveRight() {
        this.move.play();
        if (!this.checkCollision(this.rowposition, this.colposition + 1, this.layout[this.activeIndex])) {
            this.clear();
            this.colposition++;
            this.draw();
        }
    }

    moveDown() {
        this.roi.play()
        if (!this.checkCollision(this.rowposition + 1, this.colposition, this.layout[this.activeIndex])) {
                this.clear();
                this.rowposition++;
                this.draw();
                return;
        }

        this.handleLanded();
        if (!board.gameOver) {
            generateNewBrick();
        }

    }

    rotate() {
        this.move.play();
        if (!this.checkCollision(this.rowposition, this.colposition, this.layout[(this.activeIndex + 1) % 4])) {
            this.clear()
            this.activeIndex = (this.activeIndex + 1) % 4;
            this.draw();
        }
    }

    checkCollision(nextRow, nextCol, nextLayout) {
        for (let row = 0; row < nextLayout.length; row++) {
            for (let col = 0; col < nextLayout[0].length; col++) {
                if (nextLayout[row][col] !== white_colorid && nextRow >= 0) {
                    if (
                        col + nextCol < 0 ||
                        col + nextCol >= cols ||
                        row + nextRow >= rows ||
                        board.grid[row + nextRow][col + nextCol] != white_colorid
                    )
                        return true;
                }
            }
        }
        return false;
    }

    handleLanded() {
        if (this.rowposition <= 0) {
            board.handleGameOver();
            return;
        }

        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== white_colorid) {
                    if (this.id == 1){
                        board.grid[row + this.rowposition][col + this.colposition] = 0;
                    }else {
                        board.grid[row + this.rowposition][col + this.colposition] = this.id;
                    }
                }
            }
        }
        board.handleCompleteRows();
        board.drawBoard()
    }
}
