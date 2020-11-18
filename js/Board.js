class Board {
    constructor() {
        this.spaces = createSpaces();
        this.rows = 6;
        this.cols =7; 
    }
    
    createSpaces() {
        const spaces = [];
        
        for(let r = 0; r < rows; r++){
            const column = [];
            
            for(let c = 0; c < cols; c++) {
                const space = new Space(r, c);
                column.push(space);
            }
            
            spaces.push(column);
        }
        
        return spaces;
    }
    
    drawHTMLBoard() {
        for(const column of this.spaces) {
            for(const space of this.cols) {
                space.drawSVGSpace();
            }
        }
    }
}

//let index = (row * game.colCount + col)