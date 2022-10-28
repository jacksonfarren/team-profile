const Employee = require("../lib/Employee");

test("Creates a new employee objcet", () => {
    const employee = new Employee();
    expect(typeof(employee)).toEqual("object");
})

test("Testing Employee name", () => {
    const name = "Jackson";

    const employee = new Employee(name);
    expect(employee.getName()).toEqual(name) ;
})

test("Testing ID", () => {
    const id = 1;
    const employee = new Employee("Jackson", id);

    expect(employee.getID()).toEqual(id);
})

test("Testing email", () => {
    const email = 'jacksonfarren@hotmail.com'
    const employee = new Employee("Jackson", 1, email)

    expect(employee.getEmail()).toEqual(email);
})

test("Testing role", () => {
    const employee = new Employee('Jackson', 1, 'jacksonfarren@hotmail.com');

    expect(employee.getRole()).toEqual("Employee");
})