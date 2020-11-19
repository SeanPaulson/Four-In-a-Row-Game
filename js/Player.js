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
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }
    
    
    /**
    *Gets all tokens that haven't been dropped.
    *@return {array} Array of unused tokens.
    */
    get unusedTokens() {
        const numTokensDropped = [];
        
        for(const token of this.tokens){
            if (!token.used) {
                numTokensDropped.push(token);
            }
        }
        
        return numTokensDropped;
    }
    
    /**
    * Gets the active token by returning the first token in the array of unused tokens.
    *@return {Object} First token object in the array of unused tokens.
    */
    get activeTokens() {
        const currentToken = this.unusedTokens;
        return currentToken[0];
    }
    
}