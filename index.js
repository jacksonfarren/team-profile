// Class and contructor imports
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// npm imports
const inquirer = require("inquirer");
const fse = require("fs-extra");

// Template import 
const template = require("./src/template");

teamArr = [];

function generateApp() {
    function addTeam() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'addTeamMember',
                message: 'If you would like to add another team member, select one of the options below. Otherwise, choose "done"',
                choices: ["Manager", "Engineer", "Intern", "Done"]
            }
        ]).then(function (val) {
            switch(val.addTeamMember) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Done":
                    buildTeam();
                    break;
            }
        })
    }

    function addManager() {
        inquirer.prompt ([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the name of the Manager?"
            },

            {
                type: 'input',
                name: 'managerID',
                message: "What is the Manager's ID number?"
            },

            {
                type: 'input', 
                name: 'managerEmail',
                message: "What is the Manager's email?",
                validate: val => {
                    if (validator.validate(val)) {
                        return true
                    } else {
                        return 'Enter a valid email address'
                    }
                }
            },

            {
                type: 'input',
                name: 'managerOfficeNum',
                message: "What is the Manager's office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
            teamArr.push(manager);
            addTeam();
        })
    }

    function addEngineer() {
        inquirer.prompt([
          {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
          },
    
          {
            type: "input",
            name: "engineerID",
            message: "What is the engineer's ID number?" 
          },
    
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?",
            validate: val => {
                if (validator.validate(val)) {
                    return true;
                } else {
                    return 'Please enter a valid email address';
                }
            }
          },
    
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
          }
    
        ]).then(answers => {
          const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
          teamArray.push(engineer);
          addTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
          },
    
          {
            type: "input",
            name: "internID",
            message: "What is the intern's ID number?" 
          },
    
          {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
          },
    
          {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
          }
    
        ]).then(answers => {
          const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
          teamArray.push(intern);
          addTeam();
        });
    }

    function buildTeam(data) {
        fse.writeFile("./dist/index.html", data, err => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log("Team profile has been successfully generated! To locate the file, navigate to the dist folder and then the index.html file");
            }
        })
    }

    addTeam();
}

generateApp();