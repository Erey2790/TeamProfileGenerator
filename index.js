const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const generatePage = require('./src/page-template');
// const writeFile = require('');

const teamArray = [];

// prompts
const createManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the managers ID'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter managers email'
            },
            {
                type: 'input',
                name: 'office',
                message: 'Please enter the managers office number'
            }
        ])
        .then(managerInput => {
            const { name, id, email, office } = managerInput;
            const manager = new Manager (name, id, email, office);

            teamArray.push(manager);
            console.log(manager)
        })
};

const createEmployee = () => {
    console.log(`
    == ADD EMPLOYEES HERE ==`)
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                messsage: 'Please choose your employees role',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the employee?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the employees ID'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter employees email'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter employees github username',
                when: (input) => input.role === "Engineer"
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter the interns school",
                when: (input) => input.role === "Intern",
            },
            {
                type: 'confirm',
                name: 'confirmEmployee',
                message: 'Would you like to add more Employee?',
                default: false
            }
        ])
        .then(employeeInfo => {
            // info for employee
            const { name, id, email, role, github, school, confirmEmployee } = employeeInfo;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer (name, id, email, github);

                console.log(employee)
            } else if (role === "Intern") {
                employee = new Intern (name, id, email, school);

                console.log(employee);
            }

            teamArray.push(employee);
            if (confirmEmployee) {
                return createEmployee(teamArray);
            } else {
                return teamArray;
            }
        })
};

// generate html page using fs
const writeFile = teamArray => {
    fs.writeFile('./dist/index.html', teamArray, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile is now ready to be viewed! Please navigate to index.html")
        }
    })
}


createManager()
    .then(createEmployee)
    .then(teamArray => {
        return generatePage(teamArray)
    })
    .then(pageHtml => {
        return writeFile(pageHtml)
    })
    .catch(err => {
        console.log(err);
    });
