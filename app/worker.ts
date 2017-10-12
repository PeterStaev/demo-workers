require("globals");

console.log("Loaded from the worker");

self.onmessage = (msg: any) => {
    console.log(msg.data);
}