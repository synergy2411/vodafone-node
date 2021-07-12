// Closure - is the process of binding the external scope variables with inner functions

// function testClosure(){
//     var x = 4;
//     return function(){
//         ++x;
//         return x;
//     }
// }

// var nestFunc = testClosure();

// console.log(nestFunc());        // 5// 5
// console.log(nestFunc());        // 5// 6
// console.log(nestFunc());        // 5//7

// console.log(testClosure());         // ?




function buildTicket (transport){
    var numOfPass = 0;
    return function(passengerName){
        return "Hello " + passengerName + ",\nYou are going via " + 
            transport + "\nYour Ticket ID #" + (++numOfPass)
    }
}

var ship = buildTicket("Ship");

console.log(ship("Foo"))        // ?
console.log(ship("Bar"))        // ?
console.log(ship("Baz"))        // ?

var car = buildTicket("Car");
console.log(car("Bam"))         // ?
console.log(car("me"))         // ?
