import { tarefasDB , searchTask } from "../tasks/taskDB.js";
import { deleteLastLetter } from "../utils/utils.js";

const input = document.getElementById("inputEntry")
const btn = document.getElementById("btn");
const backspace = document.getElementById("backspace");
const backspaceInput = document.getElementById("backspaceInput")

function start(){
    document.body.onload = tarefasDB.loadTasks()

    btn.addEventListener("click", _=>{
        tarefasDB.adicionarTarefa(input.value)
    })

    backspace.addEventListener("click", _=>{
        deleteLastLetter()
    })

    document.addEventListener("keydown", e=>{
        if(e.keyCode == 13) tarefasDB.adicionarTarefa(input.value)
    })

    backspaceInput.addEventListener("keyup", e =>{
        const listaDeTarefas = document.querySelectorAll(".paragraphTarefa")
        setTimeout(() =>{
            searchTask(listaDeTarefas, backspaceInput)
        }, 1000) 
    })
}

export { start }