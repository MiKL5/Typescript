const itemsContainer = document.querySelectorAll(('items-containers')) as NodeListOf<HTMLDivElement>

function addContainerListeners(currentContainer: HTMLDivElement) { // sert à ajouter tout les listeners
    // supprimer un container
    const currentContainerDeletion = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;
    deleteBtnListeners(currentContainerDeletion)
}// qui déclanche deleteBtnListeners

itemsContainer.forEach((container: HTMLDivElement) => {
    addContainerListeners(container)
})

function deleteBtnListeners(btn: HTMLButtonElement) { // qui ajoute l'eventListener
    btn.addEventListener('click', handleContainerDeletion) // qui permet de gérer handleContainerDeletion
}

function handleContainerDeletion(e: MouseEvent){
    const btn = e.target as HTMLButtonElement;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];
    const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[];
    containers[btnsArray.indexOf(btn)].remove()
}