"use strict";
const itemsContainer = document.querySelectorAll('items-containers');
// manipuler les items à l'intérieur des containers pour faire moins de répétition et de code
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
function addContainerListeners(currentContainer) {
    // supprimer un container // usage de current car ça sera ajouter à tous les éléments d'un container
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
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
    setContainerItems(btn); //permet d'utilier les variables dynamiques
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
