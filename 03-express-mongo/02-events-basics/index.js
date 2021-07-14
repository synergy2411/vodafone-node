const { EventEmitter } = require("events");

const emitter = new EventEmitter();

// - emit() - produces / trigger the event
// - on() - register the handler/ Callback Function


emitter.on("newListener", (eventName, listenerFunc) => {
    // 1 | 2
    console.log(`New Listener for Event ${eventName} added with event handler ${listenerFunc.name}`);
})

emitter.on("removeListener", (eventName, listenerFunc) => {
    console.log(`Deteched listener ${listenerFunc.name} from Event ${eventName} `)
})

function eventHandler(data = {message  : null}){
    console.log("Handler function executed", data.message); // 3
    emitter.removeListener("foo", eventHandler);
}

// emitter.on("bar", eventHandler)
emitter.on("foo", eventHandler)

emitter.on("foo", (data) => {
    console.log("Foo Event fired...", data.message)     // 4
})

emitter.emit("foo", {message : "First Time Called"})
// emitter.emit("foo", {message : "Second Time Called"})
// emitter.emit("bar")


// process.on("uncaughtException", code => {

// })