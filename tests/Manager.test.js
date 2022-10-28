const Manager = require("../lib/Manager");

test('Testing Manager Office Number', () => {
    const officeNumber = 1234;
    const manager = new Manager('Jackson', 1, 'jacksonfarren@hotmail.com', officeNumber);

    expect(manager.getOfficeNum()).toEqual(officeNumber);
})

test('Testing role', () => {
    const manager = new Manager('Jackson', 1, 'jacksonfarren@hotmail.com', 1234);

    expect(manager.getRole()).toEqual('Manager');
})