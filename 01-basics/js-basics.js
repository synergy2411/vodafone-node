// console.log("Hello World");
// "use strict";

// var x = "Sample String";

// console.log(typeof x);      // string

// x = 100;

// console.log(typeof x);      // number

// x = true;

// console.log(typeof x);      // number

// TypeScript - by Microsoft - defines types definition











// function logRunningOperation(){
//     setTimeout(function(){
//         console.log("Running the operation");
//     }, 0)
// }

// function webRequest(req){
//     console.log("Starting the operation with id : ", req.id)
//     logRunningOperation();
//     console.log("Ending the operation with id : ", req.id)
// }
// console.log("PRogram starts")
// webRequest({id : 1});
// webRequest({id : 2});
// console.log("Program termintes");

// OUTPUT ?
// program starts
// starting with ID : 1
// ending with ID : 1
// starting with ID : 2
// ending with ID : 2
// program terminates
// - 3 seconds gap
// running the operation


// Macro tasks - All Async tasks - XHR Call, Event triggered, loading some scripts

// Micro tasks - Promises

// Next Macro task will run once all the Micro tasks with get completed


// setTimeout(function(){
//     console.log("Set timeout")
// }, 0)

// Promise.resolve().then(() => {console.log("Promise resolved")})

// console.log("console log")

// OUTPUT : 
// console
// promise
// timer

// promise
// console
// timer




// Promise resolved
// console log
// set timeout

// setimout
// promise
// console

// resolve
// set timeout
// console



// var x = 100;
// // Async
// setTimeout(function(){
//     x = 200;
//     console.log(x);
// }, 0);

// // Sync
// console.log(x); // => 100

// after 2 seconds 200
// immediately 100 







// Promises
    // - Producer Code - resolved (success) / rejected (failure)
    // - Consumer Code - then() / Async...await function

    function producer(arr){
        var promise = new Promise(function(resolve, reject){
            setTimeout(function(){
                if(arr.length > 2){
                    resolve("RESOLVED")
                }else{
                    reject("REJECT")
                }
            }, 3000);
        });
        return promise;
    }

    // Consumer Code

    async function demo(){
        try{
        var response = await producer([2,3]);
        console.log(response);
        }catch(err){
            console.log("ERROR - ", err);
        }
    }

    demo()



        // console.log("Started")
        // producer([1,2,3,4])
        //     .then(function(response){
        //         console.log(response);
        //         return "AWESOME " + response;
        //     }).then(function(result){
        //         console.log(result);
        //     })
        //     .catch(function(err){
        //         console.log(new Error(err));
        //     })

        //     console.log("Ended")











