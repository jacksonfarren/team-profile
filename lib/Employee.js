class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // return role
    getRole() {
        return 'Employee';
    }

    // return name 
    getName() {
        return this.name;
    }

    // return id
    getID() {
        return this.id;
    }

    // return email
    getEmail() {
        return this.email;
    }
}

// exporting Employee class
module.exports = Employee;