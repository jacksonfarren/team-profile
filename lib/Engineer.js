// Require Employee parent class
const Employee = require('./Employee')

// Engineer class extends from the Employee parent class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // reference parent class for designated variables
        super (name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // Override Employee role with Engineer role
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;