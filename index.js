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
                name: 'officeNumber',
                message: 'Please enter the managers office number'
            }
        ])
}
createManager()