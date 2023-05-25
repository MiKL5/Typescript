"use strict";
const itemsContainer = document.querySelectorAll(('items-containers'));
function addContainerListeners(currentContainer) {
    // supprimer un container
    const currentContainerDeletion = currentContainer.querySelector('.delete-container-btn');
    deleteBtnListeners(currentContainerDeletion);
} // qui déclanche deleteBtnListeners
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDeletion); // qui permet de gérer handleContainerDeletion
}
function handleContainerDeletion(e) {
    const btn = e.target;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[btnsArray.indexOf(btn)].remove();
}
