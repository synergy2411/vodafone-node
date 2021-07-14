"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(email, age) {
        this.email = email;
        this.age = age;
    }
    Student.prototype.getDetails = function () {
        return this.email + ", " + this.age;
    };
    return Student;
}());
exports.Student = Student;
