class todo extends HTMLElement{
    constructor(){
        super()
        this.create()
    }

    create(){
        const shadow = this.attachShadow({mode:"open"})

        let div = document.createElement("div")
        shadow.appendChild(div)
    }
}

customElements.define('todo-element',todo)