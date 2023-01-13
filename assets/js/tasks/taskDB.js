import { addId } from "../utils/utils.js"
import { render } from "../content/renders.js"

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
        render.insereNoHtml(tasks)
    }
}

tarefasDB.deleteTask = (id) =>{
    delete tarefas[id]
}

function deleteItemFromList (event) {
    const button = event.currentTarget;
    let id = button.id;
    button.parentElement.parentElement.remove();
    delete tarefas[id]
    tarefasDB.saveTasks();
}

tarefasDB.adicionarTarefa = (tarefaInput) =>{
    if(!tarefaInput){
        return
    }
    const tarefaDesc = tarefaInput 
    const id = addId.id

    tarefas[id] = {id,desc: tarefaDesc}
    render.insereNoHtml(tarefas)
    tarefasDB.saveTasks()
}

tarefasDB.editarTarefa = (evento) =>{
    const buttonClicado = evento.currentTarget.parentElement
    const id = evento.currentTarget.id
    const paragrafo = buttonClicado.parentElement.querySelector(".paragraphTarefa")

    paragrafo.classList.toggle("inputNoFormat")
    paragrafo.removeAttribute("disabled", false)
    tarefas[id] = {id, desc:paragrafo.value}
    tarefasDB.saveTasks()
}

function searchTask(lista, inputVerified){
    lista.forEach(listaItem =>{ 
        const taskName = listaItem.value.toLowerCase()
        if(taskName.indexOf(inputVerified.listaItem.toLowerCase()) > -1){
            listaItem.parentElement.style.display = "flex"
            console.log(listaItem.parentElement)
        } else{
            listaItem.parentElement.style.display = "none"
        }
    }) 
}


export { tarefasDB , searchTask , deleteItemFromList}