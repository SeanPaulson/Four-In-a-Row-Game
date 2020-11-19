class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.used = false;
    }
    /**
    * Gets associated htmlToken.
    * @return {element} Html element associated with token object.
    */
    get htmlToken() {
        return document.getElementById(this.id);
    }
    
    drawHTMLToken() {
        const token = document.createElement('div');
        document.getElementById("game-board-underlay").appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }
}