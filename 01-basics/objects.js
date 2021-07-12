// {Object} - is an unordered collection, which can have various properties;
// - Properties are nothing but key-value pair, seperated by (:) colon

// [Array] - is an ordered collection

// Literal Method = {}
    // Array is reference type
    // var myBooks = ["book1", "book2", "book3"];

    // var box = {
    //     width : 8,
    //     height : 10,
    //     books : myBooks,
    //     addBook : function(book){
    //         this.books.push(book);
    //     },
    // }

    // box.volume = box.width * box["height"]

    // box.addBook("book4");

    // console.log(box.books.length);      // 4
    // console.log(myBooks.length);        // 4

    // console.log(box);           // { width, heigth, volume }

    // var user = {
    //     name : "Foo"
    // }

    // var new_user = user;

    // new_user.name = "Bar";

    // console.log(user.name);         // "Bar"


    // var str1 = "Foo";
    // var str2 = str1;
    // str2 = "Bar";
    // console.log(str1);          // ?












// Contructor Method - Similar types of object

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // this.getDetails = function(){
//     //     return this.lastName + ", " + this.firstName;
//     // }
//     // this.sayHello = function(){
//     //     return "Hello " + this.firstName
//     // }
// }

// Person.prototype.getDetails = function(){
//     return this.lastName + ", " + this.firstName
// }
// Person.prototype.sayHello = function(){
//     return "Hello " + this.firstName
// }


// var foo = new Person("Foo", "Bar");
// var bam = new Person("Bam", "Baz");

// console.log(foo.getDetails());
// console.log(foo.sayHello());

// console.log(bam.getDetails());


// var str = "Some String";
// // var str = new String("Some String");

// var num = 8765;
// num.length;         // We can't acces it
// // var num = new Number(8765);

// console.log(str.length);        // 11

// str.indexOf("i")        // String Constructor Prototype









// Instance Method - Object.create()

// var Shoe = {
//     size : 8
// }

// var magicShoe = Object.create(Shoe);

// console.log(magicShoe.hasOwnProperty("size"))
// console.log(Shoe.hasOwnProperty("size"));

// console.log(magicShoe);         // { }

// magicShoe.size = 12;

// console.log(magicShoe.size);        // 12

// console.log(Shoe.isPrototypeOf(magicShoe))      // 
// console.log(magicShoe.isPrototypeOf(Shoe))      // 
// console.log(Object.prototype.isPrototypeOf(Shoe))           // ?
// console.log(Object.prototype.isPrototypeOf(magicShoe))           // ?