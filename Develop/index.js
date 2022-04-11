// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { reject } = require('lodash');
const { type } = require('os');
const { listenerCount } = require('process');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const promptProject = projectData => {

    return inquirer.prompt([ 
        {
            type: 'input',
            name: 'githubName',
            message: 'What is the name of your Github Account? (required)',
            validate: githubNameInput => {
                if (githubNameInput) {
                    return true
                    } else {
                        console.log('Please enter the name of your github account.')
                        return false
                    }
                }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (required)',
            validate: emailInput => {
                if (emailInput) {
                    return true
                    } else {
                        console.log('Please enter your email address.')
                        return false
                    }
                }
        },
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
            type: 'list',
            name: 'licenseChoice',
            message: 'Which license best fits your project? For more information check out https://choosealicense.com/licenses/',
            choices: ['GNU AGPLv3','GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License', 'Unlicense'],
            when: ({licenseConfirm}) => {
                if (licenseConfirm) {
                    return true
                } else {
                    return false
                }
            }
        }
    ]).then(projectData => {
        console.log(projectData)
        return projectData 
    });
}
    

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err)
                return
            } 
            resolve({
                ok: true,
                message: 'README created!'
            })
        })
    });
};

// TODO: Create a function to initialize app
function init() {
    promptProject()
    .then(promptData => {
        return generateMarkdown(promptData) 
    })
    .then(fileData => {
        return writeToFile(fileData)})
    .catch(err => {
        console.log(err);
    });
}

init();