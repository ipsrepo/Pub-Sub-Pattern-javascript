import { ADD_TASK, REMOVE_TASK } from "./variable.js";
import { pubsub } from "./pubsub.js";
import { logger } from "./logger.js";

export const states = {
    task : {
        count: 0,
        recent: ''
    },
    render: container =>{
        let template = document.querySelector('.state-template');
        let node = template.content.cloneNode(true);
        container.appendChild(node);
        pubsub.subscribe(ADD_TASK, states.addTask);
        pubsub.subscribe(REMOVE_TASK, states.removeTask);
    },
    addTask: task => {
        logger.publish(`State : I am increasing task count 1 with recent task - ${task}`);
        states.task.count++;
        states.task.recent = task;
        states.reRender();
    },
    deleteTask: () => {
        states.task.count--;
        states.task.recent = '';
        states.reRender();
    },
    reRender: () => {
        const total = document.querySelector('.task-count');
        const recent = document.querySelector('.recent-task');
        total.innerText = states.task.count;
        recent.innerText = states.task.recent;
    }
}