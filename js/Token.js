class Token {
    constructor(owner, id) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.used = false;
    }
    
    get htmlToken() {
        return;
    }
    
    drawHTMLToken() {
        const token = document.createElement('div');
        document.getElementById("game-board-underlay").appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;
    }
}