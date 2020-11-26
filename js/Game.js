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
    
    switchPlayer() {
        let activePlayerId = this.activePlayer.id;
        for (let player of this.players) {
            if (player.id === activePlayerId) {
                player.active = false;
            } else {player.active = true}
        }
        
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
    * @Returns {Object} player with active === true.
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

console.log("targetSpace" + targetSpace);
       if (targetSpace !== null) {
           this.ready = false;
           this.activePlayer.activeToken.drop(targetSpace,game.updateGameStatus(targetColumn, targetSpace))
           this.activePlayer.activeToken.used = true;
       }
    }

    updateGameStatus(targetColumn, targetSpace) {
        let counter = 0;
        let targetRow = targetSpace.y;
        //checkForWinningMove 
           //check column
           for (let space of this.board.spaces[targetColumn]) {
               if (space.token === null) {
                   counter = 0;
                   
               } else if (space.owner.id === this.activePlayer.id) {
                   counter++;
                   //(counter === 4) ? gameOver(this.activePlayer)
               }
           }
           //check row
                counter = 0;
                console.log(targetRow);
               for (let space of this.board.spaces) {
                  if (space[targetRow].token === null) {
                      counter = 0;
                      
                  } else if (space[targetRow].owner.id === this.activePlayer.id) {
                      counter++;
                      //(counter === 4) ? gameOver(this.activePlayer);
                  }
               }
               console.log("counter****" + counter);
           //check upDiag
           //check downDiag
        
        
        //if win return GameOver
        //else switch active player
        this.switchPlayer();
        console.log(this.activePlayer);
        console.log('active player' + this.activePlayer.id);
        console.log('token test '+ this.activePlayer.activeToken.id);
        //reset token
        this.activePlayer.activeToken.drawHTMLToken();
        
        this.ready = true;
    }
    
}








