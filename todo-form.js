import { pubsub } from './pubsub.js';
import { ADD_TASK } from './variable.js';

export const toDoForm = {
    render: container => {
        let template = document.querySelector('.form-template');
        let form = template.content.cloneNode(true);
        form.querySelector('.add-task').addEventListener('click', toDoForm.add);
        container.appendChild(form);
    },
    add: ev => {
        ev.preventDefault();
        let input = document.querySelector('.todo-form input');
        const task = input.value.trim();
        input.value = ''; //clear the form

        console.log(`ToDo Form: I am adding task ${task}`);
        pubsub.publish(ADD_TASK, task);
    }
}