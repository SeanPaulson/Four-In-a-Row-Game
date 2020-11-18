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
    
    startGame() {
        
    }
}