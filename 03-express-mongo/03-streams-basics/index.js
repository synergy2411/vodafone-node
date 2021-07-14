const fs = require("fs");
const { EventEmitter } = require("events")
const stream = require("stream");

console.log(new stream.Readable() instanceof stream.Stream);
console.log(new stream.Writable() instanceof stream.Stream);
console.log(new stream.Stream() instanceof EventEmitter)

// let readStream = fs.createReadStream("./text.md")
// let writeStream = fs.createWriteStream("./new-file.md")
// readStream.pipe(writeStream);

// fs.readFile("./text.md", (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })