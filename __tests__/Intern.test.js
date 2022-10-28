const Intern = require("../lib/Intern");

test('Testing Intern School', () => {
    const intern = new Intern('Jackson', 1, 'jacksonfarren@hotmail.com', 'UCLA');

    expect(intern.getSchool()).toEqual('UCLA');
})

test('Testing role', () => {
    const intern = new Intern('Jackson', 1, 'jacksonfarren@hotmail.com', 'UCLA');

    expect(intern.getRole()).toEqual('Intern');
})