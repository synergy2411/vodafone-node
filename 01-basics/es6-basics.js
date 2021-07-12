// ES6 / ES2015
// - Arrow Function - Great for one liner function
    // - With Curly braces - multiple line in functiton body
    // - Without Curly braces - one-line function
    // - does not have "this" keyword
    // - Can't call Arrow function with "new" keyword

    // ES5 ways
    var numbers = [1,2,3,4,5];
    // var doubleValue = numbers.map(function(value, index, array){
    //     return value * 2;
    // })
    // console.log(doubleValue);

    // ES6 way
    // var doubleValue = numbers.map(value => value * 2);
    var doubleValue = numbers.map((value, index, array) => {
        console.log("Value - ", value)
        return value * 2;
    });
    console.log(doubleValue);





// - Destructuring
// - Rest / Spread
// - Template String
// - Block scoping