
import { toDoForm } from "./todo-form.js";
import { toDoList } from "./todo-list.js";
import { states } from "./state.js";
import { logger } from "./logger.js";

document.addEventListener("DOMContentLoaded", () => {
    const aside = document.querySelector("aside");
    const main = document.querySelector("main");

    toDoForm.render(aside);

    toDoList.render(main);

    states.render(aside);

    logger.render(main);

    logger.publish('DOMContentLoaded');
});