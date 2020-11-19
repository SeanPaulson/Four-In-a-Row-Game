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
        this.activePlayer.activeTokens.drawHTMLToken();
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
                this.activePlayer.activeTokens.moveLeft();
            } else if (e === 'ArrowRight') {
                this.activePlayer.activeTokens.moveRight(this.board.cols);
            } else if (e === 'ArrowDown') {
                //move down
            }
        }
    }
}