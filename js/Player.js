class Player {
    constructor (color, id, name, active = false) {
        this.color = color;
        this.id = id;
        this.name = name;
        this.active = active;
        this.tokens = this.createTokens(21);
    }
    traverse() {
        
    }
    
    selectMove() {
        
    }
  /**
  * Creates token objects for player
  * @param   {integer}   num - Number of token objects to be created
  * @return  {array}     tokens - an array of new token objects
  */
    createTokens(num) {
        const tokens = [];
        
        for (let i = 0; i < num; i++) {
            let token = new Token(this, num);
            tokens.push(token);
        }
        return tokens;
    }
    
}