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

    deleteBtnListeners(currentContainerDeletionBtn)
    addItemBtnListeners(currentAddItemBtn)
}// qui déclanche deleteBtnListeners

itemsContainer.forEach((container: HTMLDivElement) => {
    addContainerListeners(container)
})

function deleteBtnListeners(btn: HTMLButtonElement) { // qui ajoute l'eventListener
    btn.addEventListener('click', handleContainerDeletion) // qui permet de gérer handleContainerDeletion
}
function addItemBtnListeners(btn: HTMLButtonElement) {
    btn.addEventListener('click', handleAddItem)
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
    setContainerItems(btn); //permet d'utilier les variables dynamiques
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