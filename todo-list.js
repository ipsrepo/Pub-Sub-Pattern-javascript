import { logger } from "./logger.js";
import { pubsub } from "./pubsub.js";
import { ADD_TASK } from "./variable.js";

export const toDoList = {
    list : [],
    render: container => {
        let template = document.querySelector('.list-template');
        let task = template.content.cloneNode(true);
        container.appendChild(task);
        pubsub.subscribe(ADD_TASK, toDoList.addTask)
    },
    addTask: task => {
        logger.publish(`Task List: I am receiving the task - ${task}`);
        toDoList.list.push(task);
        let template = document.querySelector('.list-items');
        template.innerHTML = ''
        let df = document.createDocumentFragment();
        toDoList.list.map((task)=> {
            const p = document.createElement('p');
            p.addEventListener('click', toDoList.removeTask);
            p.innerText = task;
            df.appendChild(p);
        })
        template.appendChild(df);
    },
    removeTask: ev => {
        let item = ev.target.closest('p');
        let name = item.textContent;
        toDoList.list = toDoList.list.filter(task => task!== name);
        item.parentElement.removeChild(item);
        logger.publish(`Task List: I am deleting the task - ${name}`);
    }
}