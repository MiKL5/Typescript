const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>

// manipuler les items à l'intérieur des containers pour faire moins de répétition et de code
let actualContainer: HTMLDivElement,
    actualBtn: HTMLButtonElement,
    actualUL: HTMLUListElement,
    actualForm: HTMLFormElement,
    actualTextInput: HTMLInputElement,
    actualValidation: HTMLSpanElement;

function addContainerListeners(currentContainer: HTMLDivElement) { // sert à ajouter tout les listeners
    // supprimer un container // usage de current car ça sera ajouter à tous les éléments d'un container
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn') as HTMLButtonElement
    const currentCloseFormBtn = currentContainer.querySelector('.close-form-btn') as HTMLButtonElement
    const currentForm = currentContainer.querySelector('form') as HTMLFormElement

    deleteBtnListeners(currentContainerDeletionBtn)
    addItemBtnListeners(currentAddItemBtn)
    closingFormBtnListeners(currentCloseFormBtn)
    addFormSubmitListeners(currentForm)
    addDDListeners(currentContainer)
} // qui déclanche deleteBtnListeners

itemsContainer.forEach((container: HTMLDivElement) => {
    addContainerListeners(container)
})

function deleteBtnListeners(btn: HTMLButtonElement) { // qui ajoute l'eventListener
    btn.addEventListener('click', handleContainerDeletion) // qui permet de gérer handleContainerDeletion
}
function addItemBtnListeners(btn: HTMLButtonElement) {
    btn.addEventListener('click', handleAddItem)
}
function closingFormBtnListeners(btn: HTMLButtonElement) {
    btn.addEventListener('click', () => toggleForm(actualBtn, actualForm, false))
}
function addFormSubmitListeners(form: HTMLFormElement) {
    form.addEventListener('submit', createNewItem)
}
function addDDListeners(element: HTMLElement) { //drag and drop
    element.addEventListener('dragstart', handleDragStart)
    element.addEventListener('dragover', handleDragOver)
    element.addEventListener('drop', handleDrop)
    element.addEventListener('dragend', handleDragEnd)
}

function handleContainerDeletion(e: MouseEvent){
    const btn = e.target as HTMLButtonElement;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];
    const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[];
    containers[btnsArray.indexOf(btn)].remove()
}

function handleAddItem(e: MouseEvent) {
    const btn = e.target as HTMLButtonElement;
    if(actualContainer) toggleForm(actualBtn, actualForm, false); // si un bouton est ouvert, fermer l'autre
    setContainerItems(btn); // permet d'utilier les variables dynamiques
    toggleForm(actualBtn, actualForm, true)
}

function toggleForm(btn: HTMLButtonElement, form: HTMLFormElement, action: Boolean) {
    if(!action) { // si c'est sur false, renvoi true et exécute l'action
        form.style.display = "none";
        btn.style.display = "block";
    } else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}

function setContainerItems(btn: HTMLButtonElement) { // gérer le formulaire
    actualBtn = btn;
    actualContainer = btn.parentElement as HTMLDivElement;
    actualUL = actualContainer.querySelector('ul') as HTMLUListElement;
    actualForm = actualContainer.querySelector('form') as HTMLFormElement;   
    actualTextInput = actualContainer.querySelector('input') as HTMLInputElement;   
    actualValidation = actualContainer.querySelector('.validation-msg') as HTMLSpanElement;   
}

function createNewItem(e: Event) {
    e.preventDefault()
    // Validation
    if(actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long" // si l'input n'a pas au moins un caractère, renvoi un erreur
        return;
    } else {
        actualValidation.textContent = ""
    }
    // Création Item
    const itemContent = actualTextInput.value;
    const li = `<li class="item" draggable="true">
    <p>${itemContent}</p>
    <button>X</button>
    </li>`
    actualUL.insertAdjacentHTML('beforeend', li)
    // fermer
    const item = actualUL.lastElementChild as HTMLLIElement;
    const liBtn = item.querySelector('button') as HTMLButtonElement;
    handleItemDeletion(liBtn);
    addDDListeners(item)
    actualTextInput.value = "";
}

function handleItemDeletion(btn: HTMLButtonElement) {
    btn.addEventListener('click', () => {
        const elToRemove = btn.parentElement as HTMLLIElement;
        elToRemove.remove()
    })
}

// Drag And Drop

let dragSrcEl: HTMLElement;
function handleDragStart(this: HTMLElement, e: DragEvent){ // this toujours en premier car c'est pas un paramètres, c'est ce que je peux utiliser dans la fonction, sinon c'est une erreur
    e.stopPropagation()

    if(actualContainer) toggleForm(actualBtn, actualForm, false); // si c'est pas faux ; toggleForm
    dragSrcEl = this;
    e.dataTransfer?.setData('text/html', this.innerHTML) // prend le code html de ce qui est en train de glisser
}
function handleDragOver(e: DragEvent) {
    e.preventDefault() // sans cette fonction le drag and drop ne fonctionne pas
}
function handleDrop(this: HTMLElement, e: DragEvent) {
    e.stopPropagation()
    const receptionEl = this;

    if(dragSrcEl.nodeName === "LI" && receptionEl.classList.contains("items-container")) {
        (receptionEl.querySelector('ul') as HTMLUListElement).appendChild(dragSrcEl); // doit retourner qqch et pas null grâce à HTMLListElement et on ajoute l'élément qu'on drop à l'intérieur
        addDDListeners(dragSrcEl) // ajoute les éléments car il disparaissent après un drag and drop
        handleItemDeletion(dragSrcEl.querySelector("button") as HTMLButtonElement)
    }

    if(dragSrcEl !== this && this.classList[0] === dragSrcEl.classList[0]){// prend les données enregistrer //on change les éléments html (+ou -) de place en changeant juste le contenu
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer?.getData('text/html') as string;
        if(this.classList.contains("items-container")) { // rajouter les évênements à l'élément swaper (échangé) // si c'est un container
            addContainerListeners(this as HTMLDivElement)

            this.querySelectorAll('li').forEach((li: HTMLLIElement) => {
                handleItemDeletion(li.querySelector('button') as HTMLButtonElement)
                addDDListeners(li);
            })
        } else {
            addDDListeners(this)
            handleItemDeletion(this.querySelector("button") as HTMLButtonElement)
        }
    }

}

function handleDragEnd(this: HTMLElement, e: DragEvent){
    e.stopPropagation()
    if(this.classList.contains('items-container')) { // l'élément qui s'est fait swap back (échanger en retour)
        addContainerListeners(this as HTMLDivElement)
        if(this.querySelectorAll("li")) { // reçoit aussi les évêneemnts
            this.querySelectorAll('li').forEach((li: HTMLLIElement) => {
                handleItemDeletion(li.querySelector('button') as HTMLButtonElement)
                addDDListeners(li);
            })
        }
    } else {
        addDDListeners(this)
    }
}


// Add New Container

const addContainerBtn = document.querySelector('.add-container-btn') as HTMLButtonElement;
const addContainerForm = document.querySelector('.add-new-container form') as HTMLFormElement;
const addContainerFormInput = document.querySelector('.add-new-container input') as HTMLInputElement;
const validationNewContainer = document.querySelector('.add-new-container .validation-msg') as HTMLSpanElement;
const addContainerCloseBtn = document.querySelector('.close-add-list') as HTMLButtonElement;
const addNewContainer = document.querySelector('.add-new-container') as HTMLDivElement;
const containersList = document.querySelector('.main-content') as HTMLDivElement;

addContainerBtn.addEventListener('click', () => {
    toggleForm(addContainerBtn, addContainerForm, true); // ouvrir les formulaires
})
addContainerCloseBtn.addEventListener('click', () => {
    toggleForm(addContainerBtn, addContainerForm, false) // les fermer
})
addContainerForm.addEventListener('submit', createNewContainer);

function createNewContainer(e: Event) {
    e.preventDefault()
    if(addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = "Must be at least 1 character long"
        return;
    } else {
        validationNewContainer.textContent = ""
    }

    const itemsContainer = document.querySelector(".items-container") as HTMLDivElement;
    const newContainer = itemsContainer.cloneNode() as HTMLDivElement;
    
    const newContainerContent = `
    <div class="top-container">
        <h2>${addContainerFormInput.value}</h2>
        <button class="delete-container-btn">X</button>
    </div>
    <ul></ul>
    <button class="add-item-btn">Add an item</button>
    <form autocomplete="off">
        <div class="top-form-container">
            <label for="item">Add a new item</label>
            <button type="button" class="close-form-btn">X</button>
        </div>
        <input type="text" id="item" />
        <span class="validation-msg"></span>
        <button type="submit">Submit</button>
    </form>`
    newContainer.innerHTML = newContainerContent;
    containersList.insertBefore(newContainer, addNewContainer)
    addContainerFormInput.value = ""
    addContainerListeners(newContainer);
}