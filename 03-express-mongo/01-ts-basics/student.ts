export class Student {
    private email  : string;
    private age  :number;
    constructor(email : string, age : number){
        this.email = email;
        this.age = age;
    }
    getDetails() : string{
        return `${this.email}, ${this.age}`
    }
}