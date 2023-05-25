const itemsContainer = document.querySelectorAll('items-containers') as NodeListOf<HTMLDivElement>

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