// Require Employee parent class
const Employee = require('./Employee')

// Engineer class extends from the Employee parent class
class Engineer extends Employee {
    constructor(name, id, email, githubProf) {
        // reference parent class for designated variables
        super (name, id, email);

        this.githubProf = githubProf;
    }

    returnGithubProfile() {
        return this.githubProf;
    }

    // Override Employee role with Engineer role
    returnRole() {
        return "Engineer"
    }
}

module.exports = Engineer;