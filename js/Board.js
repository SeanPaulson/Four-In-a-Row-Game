class Board {
    constructor() {
        this.rows = 6;
        this.cols =7; 
        this.spaces = this.createSpaces();

    }
    
    createSpaces() {
        const spaces = [];
        
        for(let x = 0; x < this.cols; x++){
            const column = [];
            
            for(let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                column.push(space);
            }

            spaces.push(column);
        }
        return spaces;
    }

    drawHTMLBoard() {
        for(const column of this.spaces) {
            for(const space of column) {
                space.drawSVGSpace();
            }
        }
    }
    
}

//let index = (row * game.colCount + col)