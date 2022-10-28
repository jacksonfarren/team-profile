const Engineer = require("../lib/Engineer");

test("Testing Engineer Github", () => {
    const github = 'jacksonfarren';
    const engineer = new Engineer("Jackson", 1, "jacksonfarren@hotmail.com", github);

    expect(engineer.getGithub()).toEqual(github);
}) 

test("Testing role", () => {
    const engineer = new Engineer("Jackson", 1, "jacksonfarren@hotmail.com", "jacksonfarren");

    expect(engineer.getRole()).toEqual("Engineer");
})