// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const {generateMarkdown} = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([ 
        {
        type: 'input',
        name: 'projectName',
        message: 'What is the title of your project? (required)',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true
                } else {
                    console.log('Please enter the title of your project.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Enter a description of what your project does.',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true
                } else {
                    console.log('Please enter a description of your project.')
                }
            }
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: "Enter instructions on how the user should install your project.",
            validate: installationInstructionsInput => {
                if (installationInstructionsInput) {
                    return true
                } else {
                    console.log("Please enter instructions so the user knows how to install your project")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: "Enter instructions on how the user should use your project.",
            validate: useInput => {
                if (useInput) {
                    return true
                } else {
                    console.log("Please enter instructions so the user knows how to use your project")
                    return false
                }
            }
        },
        {   
            type: 'input',
            name: 'contribution',
            message: 'What are the guidelines for other developers to contribute to your project?',
            validate: contributionInput => {
                if (contributionInput) {
                    return true
                } else {
                    console.log("Please enter guidelines so that other developers know how to contribute to your project.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: "What tests were executed to validate your project?",
            validate: testInput => {
                if (testInput) {
                    return true
                } else {
                    console.log("Please enter the tests you performed on your project.")
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'licenseConfirm',
            message: "Does a license need to be assigned to your project?",
            default: true
            
        },
        {
            type: 'checkbox',
            name: 'licenseChoices',
            message: 'Which license best fits your project? Select only one. For more information check out https://choosealicense.com/licenses/',
            choices: ['GNU AGPLv3','GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License', 'Unlicense']
        }
    ] );
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {questions()}

// Function call to initialize app
init();
