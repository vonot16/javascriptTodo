const addButton = document.querySelector("#add-item")
const todoItems = []
const todoMain = document.querySelector("#list")

addButton.addEventListener("click",() => {
    let modal = document.createElement("modal-form")
    document.body.appendChild(modal)
})

class todoItem extends HTMLElement{
    constructor(){
        super()
        this.create()
    }
    create(){
        const shadow = this.attachShadow({mode:"open"})
        let item = document.createElement("div")
        shadow.appendChild(item)
    }

    style(element){
        element.classList.add = "teste"
        element.style.height = "100px:"
        element.style.width = "100%"
        element.style.backgroundColor = "red"
    }
}

class modalForm extends HTMLElement{
    constructor(){
        super()
        this.create()
    }

    create(){
        const shadow = this.attachShadow({mode:"open"})
        let form = document.createElement("div")
        form.style.width = "500px";
        form.style.height = "500px";
        let confirmButton = document.createElement("buttom")
        confirmButton.innerText = "Save"
        form.appendChild(confirmButton)
        shadow.appendChild(form)
    }
}
customElements.define('modal-form',modalForm)
customElements.define('todo-item',todoItem)
