// Require parent class Employee
const Employee = require('./Employee')

class Manager extends Employee {
    // constructor with parent class params plus added intern param (officeNum)
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;
    }

    returnOfficeNum() {
        return this.officeNum;
    }

    returnRole() {
        return "Manager";
    }
}

module.exports = Manager;