import { tarefasDB } from "../tasks/taskDB.js";

function insertEventOnButtons(){
    const deleteButtons = document.querySelectorAll(".trashIcon");
    const editIcons = document.querySelectorAll(".editIcon");
    const doneButtons = document.querySelectorAll(".correctIcon");
    deleteButtons.forEach(deleteButton => deleteButton.onclick = tarefasDB.deleteItemFromList)
    editIcons.forEach(icon => icon.onclick = tarefasDB.editarTarefa)
    doneButtons.forEach(doneButton => doneButton.onclick = tarefasDB.finalizaTarefa)
}

export { insertEventOnButtons }