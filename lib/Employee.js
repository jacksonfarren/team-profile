class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // return role
    returnRole() {
        return 'Employee';
    }

    // return name 
    returnName() {
        return this.name;
    }

    // return id
    returnID() {
        return this.id;
    }

    // return email
    returnEmail() {
        return this.email;
    }
}

// exporting Employee class
module.exports = Employee;