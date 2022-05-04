const addButton = document.querySelector("#add-item")
const todoItems = []
const todoMain = document.querySelector("#list")

addButton.addEventListener("click", () => {
    let modal = document.createElement("modal-form")
    document.body.appendChild(modal)
})

class todoItem extends HTMLElement {
    constructor() {
        super()
        this.create()
    }
    create() {
        const shadow = this.attachShadow({ mode: "open" })
        let item = document.createElement("div")
        shadow.appendChild(item)
    }

    style(element) {
        element.classList.add = "teste"
        element.style.height = "100px:"
        element.style.width = "100%"
        element.style.backgroundColor = "red"
    }
}

class modalForm extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
        this.create()
        this.style()

    }

    create() {
        let form = document.createElement("div")
        form.classList.add("modal")

        let modalTitle = document.createElement("h2")
        modalTitle.innerText = "Create New Item"

        let itemTitleLabel = document.createElement("label")
        itemTitleLabel.setAttribute("for", "title")
        itemTitleLabel.innerText = "Title: "

        let itemTitle = document.createElement("input")
        itemTitle.setAttribute("name", "title")
        itemTitle.setAttribute("type", "text")

        let itemDescriptionLabel = document.createElement("label")
        itemDescriptionLabel.setAttribute("for", "description")
        itemDescriptionLabel.innerText = "Description: "

        let itemDescription = document.createElement("textarea")
        itemDescription.setAttribute("name", "description")

        let confirmButton = document.createElement("button")
        confirmButton.innerText = "Confirm"
        confirmButton.classList.add("confirm")

        let cancelButton = document.createElement("button")
        cancelButton.innerText = "Cancel"
        cancelButton.classList.add("cancel")


        form.appendChild(modalTitle)
        form.appendChild(itemTitleLabel)
        form.appendChild(itemTitle)
        form.appendChild(itemDescriptionLabel)
        form.appendChild(itemDescription)
        form.appendChild(confirmButton)
        form.appendChild(cancelButton)
        this.shadow.appendChild(form)
    }

    style(){
        const style = document.createElement("style")
        style.innerHTML =
        "*{"+
            "box-sizing: border-box;"+
            "padding: 0;"+
            "margin: 0;"+
            
        "}"+
        "body{"+
            "background: rgba(0,0,0,0.4);"+
        "}"+
        ".modal{"+
            "position: absolute;"+
            "top: 15%;"+
            "left: 30%;"+
            "background-color: #fff;"+
            "width: 500px;"+
            "height: 500px;"+
            "z-index: 1;"+
        "}"
        this.shadow.appendChild(style)
    }
}
customElements.define('modal-form', modalForm)
customElements.define('todo-item', todoItem)
