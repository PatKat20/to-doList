import { tarefasDB, deleteItemFromList } from "../tasks/taskDB.js";

function insertEventOnButtons(){
    const deleteButtons = document.querySelectorAll(".trashIcon")
    const editIcons = document.querySelectorAll(".editIcon")
    deleteButtons.forEach(deleteButton => deleteButton.onclick = deleteItemFromList)
    editIcons.forEach(icon => icon.onclick = tarefasDB.editarTarefa)
}

export { insertEventOnButtons }