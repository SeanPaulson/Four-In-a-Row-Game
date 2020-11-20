class Game {
    constructor () {
        this.players = this.createPlayer();
        this.board = new Board();
        this.ready = false;
    }
    
    createPlayer() {
       let players = [new Player('#e15258', 1, 'Player 1', true),
                        new Player('#e59a13', 2, 'Player 2')];
       
        return players;
    }
    
    /**
    * Initializes game.
    */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }
    
    /**
    * Returns active player
    * @Returns {Object} First token object in the array of unused tokens.
    */
    get activePlayer() {
        return this.players.find(player => player.active);
    }
    
    handleKeyDown(e) {
        if (this.ready) {
            if (e === 'ArrowLeft') {
                this.activePlayer.activeToken.moveLeft();
            } else if (e === 'ArrowRight') {
                this.activePlayer.activeToken.moveRight(this.board.cols);
            } else if (e === 'ArrowDown') {
                this.playToken();
            }
        }
    }
    
    
    playToken() {
       let targetColumn = this.activePlayer.activeToken.columnLocation;
       let targetSpace = null;
       this.ready = false;
       
       for (let space of this.board.spaces[targetColumn]) {
           if (space.token === null) {
               targetSpace = space;
           }
       }
       
       if (targetSpace !== null) {
           this.ready = false;
           this.activePlayer.activeToken.drop(targetSpace)
       }
    }
    
}








