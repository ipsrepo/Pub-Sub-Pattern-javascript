import { pubsub } from "./pubsub.js";
import { LOGGER } from "./variable.js";

export const logger = {
    render: container => {
        let template = document.querySelector('.logger-template');
        let node = template.content.cloneNode(true);
        container.appendChild(node);
        pubsub.subscribe(LOGGER, logger.addConsoleMessage);
    },

    addConsoleMessage: message => {
       const loggerContainer = document.querySelector('.logger-items');
       loggerContainer.innerHTML += `<li>${message}</li>`;
    },
    publish: message => {
        pubsub.publish(LOGGER, message);
    }
}