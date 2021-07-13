

// require("./something");         // index.js - returned by default

// external module
require("something")           
// > node_modules -> fileName -> something.js -> return that file
require("something")            
// > node_modules -> folderName -> something -> package.json -> main property -> indicate where your index.js exists







// const val = require("./utils");

// console.log(val.someString);




// // External Module
// let chalk = require("chalk")

// // File Module
// let myModule = require("./utils/my-module")

// // Native Module - path, os, http, fs, events and more 
// const path = require("path")
// const os = require("os")
// const fs = require("fs");
// const { require } = require("yargs")

// console.log("Program starts")               // 1

// // Async function
// // fs.readFile("./package.json", (err, data) => {
// //     if(err) console.log(err)
// //     console.log(data.toString());               // 3
// // })

// process.on("uncaughtException", err => {
//     console.log("Error occured with code : ", err);
// })

// try{
//     const data = fs.readFileSync("./package1.json")
//     console.log(data.toString());               // 2
// }catch(err){
//     console.log("ERROR OCCURRED")
//     process.exit(1)
// }

// console.log("Program ends");                // 3






// // console.log("Total Memory :", os.totalmem());
// // console.log("Free Memory :", os.freemem());
// // console.log("Architecture : ", os.arch());
// // console.log("Number of CPU's : ", os.cpus().length);


// // const url = "http://www.example.com/public/index.html";

// // console.log("Directory - ", path.dirname(url));
// // console.log("FILE NAME - ", path.basename(url));
// // console.log("Extension - ", path.extname(url));

// // console.log(__dirname);         // built-in variable in Node Env
// // console.log(__filename);

// // console.log(path.join(__dirname, "utils"));











// // console.log(myModule.add(4,5));
// // // console.log("MAGIC NUMBER : ", myModule.MAGIC_NUMBER);
// // console.log("MAGIC NUMBER : ", myModule.getMyLuckyNumber());

// // console.log(chalk.green("SUCCESS"))
// // console.log(chalk.red("ERROR"))
// // console.log(chalk.grey("WARNING"))

// // var | let | const