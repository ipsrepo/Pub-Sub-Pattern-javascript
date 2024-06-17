
export const pubsub = {
    events: {},
    subscribe: function(channel, callback) {
        console.log(`PUBSUB: ${channel} just subscribed `);
        //add an event with a name as new or to existing list
        this.events[channel] = this.events[channel] || [];
        this.events[channel].push(callback);
        console.log(pubsub.events);
    },
    unsubscribe: function(channel, callback) {
        console.log(`PUBSUB: ${channel} just unsubscribed `);
        if (this.events[channel]) {
            this.events[channel] = this.events[channel].filter(f => f!== callback);
        }
    },
    publish: function(channel, data) {
        console.log(`PUBSUB: Making an broadcast about ${channel} with ${data}`);
        //emit|publish|announce the event to anyone who is subscribed
        if (this.events[channel]) {
            this.events[channel].forEach(f => {
                f(data);
            });
        }
        console.log(pubsub.events);
    }
}