import { addId } from "../utils/utils.js"
import { render } from "../content/renders.js"

const list = document.getElementById("lista")
const tarefas = {}

const tarefasDB = {}

tarefasDB.saveTasks =() =>{
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    localStorage.setItem("id", JSON.stringify(addId._id))
}

tarefasDB.loadTasks =() =>{
    const tasks = JSON.parse(localStorage.getItem("tarefas"))
    const ids = JSON.parse(localStorage.getItem("id"))
    Object.assign(tarefas, tasks)
    addId._id = ids

    if(tasks){
        insereNoHtml(tasks)
    }
}

tarefasDB.adicionarTarefa = (tarefaInput) =>{
    if(!tarefaInput){
        return
    }
    const tarefaDesc = tarefaInput 
    const id = addId.id

    tarefas[id] = {id,desc: tarefaDesc}
    insereNoHtml(tarefas)
    tarefasDB.saveTasks()
}

tarefasDB.editarTarefa = (evento) =>{
    const buttonClicado = evento.parentElement
    const paragrafo = buttonClicado.parentElement.querySelector(".paragraphTarefa")
    paragrafo.classList.toggle("inputNoFormat")
    paragrafo.removeAttribute("disabled", false)
}

function deleteItemFromList (event) {
    const button = event.currentTarget;
    let id = button.id;
    delete tarefas[id];
    button.parentElement.parentElement.remove();
    tarefasDB.saveTasks();
}

function insertEventOnCards(){
    const deleteButtons = document.querySelectorAll(".trashIcon")
    deleteButtons.forEach(deleteButton => deleteButton.onclick = deleteItemFromList)
}

function insereNoHtml(tarefas) {
    const listaTarefa = render.convertListObjToHtml(tarefas)
    list.innerHTML = listaTarefa
    insertEventOnCards()
}

function searchTask(lista, inputVerified){
    lista.forEach(value =>{ 
        const taskName = value.innerHTML.toLowerCase()
        if(taskName.indexOf(inputVerified.value.toLowerCase()) > -1){
            value.parentElement.style.display = "flex"
        } else{
            value.parentElement.style.display = "none"
        }
    }) 
}

export { tarefasDB , searchTask }