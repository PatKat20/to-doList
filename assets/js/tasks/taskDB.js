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

tarefasDB.deleteItemFromList = (event) => {
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
    paragrafo.toggleAttribute("disabled")
    tarefas[id] = {id, desc:paragrafo.value}
    tarefasDB.saveTasks()
}

tarefasDB.finalizaTarefa = (event) =>{
    const todoContainer = event.currentTarget.parentElement.parentElement;
    const inputTarefa = todoContainer.querySelector(".paragraphTarefa")
    inputTarefa.classList.toggle("doneTask");
    
    inputTarefa.classList.contains("doneTask") ?
    todoContainer.style.backgroundColor = "#385268" :
    todoContainer.style.backgroundColor = "#102f5e"
    // inputTarefa.value = 

}

function searchTask(lista, inputVerified){
    lista.forEach(listaItem =>{ 
        const taskName = listaItem.value.toLowerCase()
        if(taskName.indexOf(inputVerified.value.toLowerCase()) > -1){
            listaItem.parentElement.style.display = "flex"
        } else{
            listaItem.parentElement.style.display = "none"
        }
    }) 
}


export { tarefasDB , searchTask }