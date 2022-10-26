// Require parent class Employee
const Employee = require('./Employee')

class Intern extends Employee {
    // constructor with parent class params plus added intern param (school)
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    returnSchool() {
        return this.school;
    }

    returnRole() {
        return "Intern";
    }
}

module.exports = Intern;