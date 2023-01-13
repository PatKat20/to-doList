import { insertEventOnButtons } from "../events/onButtonsEvent.js"
const render = {}
const list = document.getElementById("lista")

render.convertListObjToHtml = (tasks) => {
    return Object.values(tasks).reduce((acc, tarefa) =>{
         acc +=`
             <li class="todo">
                 <input class="paragraphTarefa inputNoFormat" type="text" disabled value="${tarefa.desc}">
                 <div class="flex-container">
                    <button type="button" class="iconsEdit trashIcon" id="${tarefa.id}">
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                    <button class="iconsEdit editIcon" id="${tarefa.id}">
                        <ion-icon name="pencil-outline" ></ion-icon>
                    </button>
                 </div>
             </li>
         `
         return acc
     },"")
 }
 
render.insereNoHtml = (tarefas) => {
    const listaTarefa = render.convertListObjToHtml(tarefas)
    list.innerHTML = listaTarefa
    insertEventOnButtons()
}

 export { render }