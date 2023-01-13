import { tarefasDB } from "../tasks/taskDB.js";
import { deleteLastLetter } from "../utils/utils.js";

const input = document.getElementById("inputEntry")
const btn = document.getElementById("btn");
const backspace = document.getElementById("backspace");
const backspaceInput = document.getElementById("backspaceInput")

function start(){
    document.body.onload = tarefasDB.loadTasks()

    btn.addEventListener("click", _=>{
        tarefasDB.adicionarTarefa(input)
    })

    backspace.addEventListener("click", _=>{
        deleteLastLetter()
    })

    input.addEventListener("keydown", e=>{
        if(e.keyCode == 13) tarefasDB.adicionarTarefa(input)
    })

    backspaceInput.addEventListener("keyup", e =>{
        const listaDeTarefas = document.querySelectorAll(".paragraphTarefa")
        setTimeout(() =>{
            tarefasDB.searchTask(listaDeTarefas, backspaceInput)
        }, 500) 
    })
}

export { start }