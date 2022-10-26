// Require parent class Employee
const Employee = require('./Employee')

class Intern extends Employee {
    // constructor with parent class params plus added intern param (school)
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;