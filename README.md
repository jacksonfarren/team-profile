# Team Profile Generator

![Badge](https://img.shields.io/badge/License-MIT-yellow)
![Badge](https://img.shields.io/github/languages/top/jacksonfarren/team-profile)

## Description
The goal of this application was to build a console application that can take in user inputs and through inquirer display the answers through an integrated html template. The user can select from a list of employee options and from there, declare that employee's name, id, email etc. Once finished, the application takes in all the data and integrates it through the template script which is then used to display the actual generated html page to which the data will be displayed.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

To use this application, clone the repository and make sure you have node.js installed. From there, it's simple. Open the terminal and cd into the repository directory. Since the package.json dependencies have the required moduels, in the terminal type `npm i`. Once the required modules are finished installing you can just type `node index.js` into the terminal and the questions will begin. To see the full installation and run through of the code, watch the video in the usage section of the README.

## Usage

### Sample Image of live HTML
![Sample](/assets/sample.jpg)

### Video Demonstration

![demonstration](/assets/demonstration.gif)

For the full video. See [Assets](/assets//demonstration.webm)

## Credits 

[Jackson Farren](https://github.com/jacksonfarren)

## License

![Badge](https://img.shields.io/badge/License-MIT-yellow) </br>
This application is licensed under MIT. To see more check out
[License](/LICENSE).

## Tests

If you would like to test the classes for each employee, you can run `npm test` in the terminal.