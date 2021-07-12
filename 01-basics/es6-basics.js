// ES6 / ES2015
// - Arrow Function - Great for one liner function
    // - With Curly braces - multiple line in function body
    // - Without Curly braces - one-line function
    // - does not have "this" keyword
    // - Can't call Arrow function with "new" keyword

    // ES5 ways
    // var numbers = [1,2,3,4,5];
    // var doubleValue = numbers.map(function(value, index, array){
    //     return value * 2;
    // })
    // console.log(doubleValue);

    // ES6 way
    // var doubleValue = numbers.map(value => value * 2);
    // var doubleValue = numbers.map((value, index, array) => {
    //     console.log("Value - ", value)
    //     return value * 2;
    // });
    // console.log(doubleValue);





// - Destructuring : Array / Objects

// var arr = ["foo", "bar", "bam", "baz"];

// var [arr1, , arr3, arr4] = arr;

// console.log(arr3);      // 

// // Nested Destructuring
// var users = [
//     {email : "test@test.com", age : 33},
//     {email : "example@test.com", age : 34},
// ]

// var [{email : e1, age: a1}, {email: e2, age : a2}] = users;

// console.log(e1, e2, a1, a2);


// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 32,
//     friends : ["Baz", "Bas"],
//     address : {
//         city : "Bengaluru",
//         street : "201, Main road, Marathahalli"
//     }
// }

// var {
//     // age, 
//     firstName, 
//     // lastName, 
//     // friends : [f1, f2], 
//     // address: { 
//     //     street : st, 
//     //     city : ct
//     // }
// } = user

// firstName = "Me";

// console.log(user.firstName)
// console.log(firstName)

// console.log(age, firstName, lastName, f1, f2, st, ct)


















// - Rest / Spread (...)
// -REST : creates the collection from individual items
    // - as function parameter
    // - last argument in function parameter list
// -SPREAD : creates multiple items from a collection
    // - on Objects and arrays
    // - unlink the reference
    // - override the same name properties

    // var user = {
    //     firstName : "Foo",
    //     lastName : "Bar"
    // }

    // var newUser = {
    //     ...user,
    //     age : 32,
    //     firstName : "BAZ"
    // }

    // console.log(newUser)
    // {firstName : "BAZ" , lastName, age}

    // newUser.firstName = "BAZ";

    
    // var user1 = user;
    
    // user1.firstName = "Baz";
    // console.log(user)

    // unlink the reference
    // var newUser = {
    //     ...user
    // }

    // newUser.firstName = "Baz";

    // // Assigning the reference
    // var newUser2 = user;
    // newUser2.firstName = "New User";

    // console.log("USER ", user);            // {firstName : "New User", lastName : "Bar"}
    // console.log("NEW USER 1 - ", newUser);   
    // console.log("NEW USER 2 - ", newUser2);        
    // { firstName : "Foo", lastName : "Bar" } 



    // var arr = [3,4,5];

    // var newArr = [1,2, ...arr, 6,7,8]

    // console.log(newArr);        
    
    // [1,2,3,4,5,6,7,8] 

    // [1,2,[3,4,5],6,7,8] 




    // function display(name, ...args){
    //     console.log(args[0]);           // foo@test.com
    // }

    // display("Foo")
    // display("Foo", "foo@test.com")
    // display("Foo", "foo@test.com", 32)





















// - Template String - " " || ' ' || ` `
    // - Embed variables within strings
    // - Write multiline string

    // var username = "John Doe";
    // var str = `Hello Mr. ${username}, 
    
    // How are you?`
    // console.log(str);



















// - Block scoping variables : restricts the variable scope to the nearest curly braces
    // - let - rest of the types
    // - const - for constants

// function demo(arr){
//     if(arr.length > 2){
//         let LOAD = "LOADING"
//         console.log(FLASH);         // undefined
//     }else{
//         let FLASH = "FLASHING"
//     }
// }

// demo([1,2,4])

// 
// const USER = "Foo";

// const user = {
//     age : 43
// }

// user = {
//     age : 45
// }

// user.age = 32;

// console.log(user);          // ?



// const arr = [2,3,4];

// arr = [2,3,4,5];

// arr.push(6);

// console.log(arr);