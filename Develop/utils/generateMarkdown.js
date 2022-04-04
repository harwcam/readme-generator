// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ## Table of Contents
  -[Description](#${data.projectDescription})
  #### [] 
  ## Description
   ${data.projectDescription}
  ##Usage
  ${data.usage}
  ##Installation
   ${data.installationInstructions}
  ##Contribution
  ${data.contribution}
  ##Testing
  ## ${data.test}
  ## Questions?
  My github profile can be found [here](https://github.com/${data.github})
  Contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
