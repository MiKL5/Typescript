"use strict";
const itemsContainer = document.querySelectorAll('items-containers');
// manipuler les items à l'intérieur des containers pour faire moins de répétition et de code
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
function addContainerListeners(currentContainer) {
    // supprimer un container // usage de current car ça sera ajouter à tous les éléments d'un container
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    const currentCloseFormBtn = currentContainer.querySelector('.close-form-btn');
    const currentForm = currentContainer.querySelector('form');
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
    closingFormBtnListeners(currentCloseFormBtn);
    addDDListeners(currentContainer);
} // qui déclanche deleteBtnListeners
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDeletion); // qui permet de gérer handleContainerDeletion
}
function addItemBtnListeners(btn) {
    btn.addEventListener('click', handleAddItem);
}
function closingFormBtnListeners(btn) {
    btn.addEventListener('click', () => toggleForm(actualBtn, actualForm, false));
}
function addFormSubmitListeners(form) {
    form.addEventListener('submit', createNewItem);
}
function handleContainerDeletion(e) {
    const btn = e.target;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[btnsArray.indexOf(btn)].remove();
}
function handleAddItem(e) {
    const btn = e.target;
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false); // si un bouton est ouvert, fermer l'autre
    setContainerItems(btn); // permet d'utilier les variables dynamiques
    toggleForm(actualBtn, actualForm, true);
}
function toggleForm(btn, form, action) {
    if (!action) { // si c'est sur false, renvoi true et exécute l'action
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUL = actualContainer.querySelector('ul');
    actualForm = actualContainer.querySelector('form');
    actualTextInput = actualContainer.querySelector('input');
    actualValidation = actualContainer.querySelector('.validation-msg');
}
function createNewItem(e) {
    e.preventDefault();
    // Validation
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long"; // si l'input n'a pas au moins un caractère, renvoi un erreur
        return;
    }
    else {
        actualValidation.textContent = "";
    }
    // Création Item
    const itemContent = actualTextInput.value;
    const li = `<li class="item" draggable="true">
    <p>${itemContent}</p>
    <button>X</button>
    </li>`;
    actualUL.insertAdjacentHTML('beforeend', li);
    // fermer
    const item = actualUL.lastElementChild;
    const liBtn = item.querySelector('button');
    handleItemDeletion(liBtn);
    addDDListeners(item);
    actualTextInput.value = "";
}
function handleItemDeletion(btn) {
    btn.addEventListener('click', () => {
        const elToRemove = btn.parentElement;
        elToRemove.remove();
    });
}
