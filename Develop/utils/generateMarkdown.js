
function renderLicenseBadge(data) {
    if (data.licenseConfirm === true) {
      const badgeDict = {
        'GNU AGPLv3' : '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        'GNU LGPLv3': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
        'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Boost Software License' : '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        'Unlicense' : '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
      }
      return `${badgeDict[data.licenseChoice]}`
    } else {
      return ''
    }
}

function renderLicenseLink(data) {

  if (data.licenseConfirm === true) {
    const licenseDict = {
      'GNU AGPLv3' : 'agpl-3.0',
      'GNU GPLv3': 'gpl-3.0',
      'GNU LGPLv3': 'lgpl-3.0',
      'Mozilla Public License 2.0': 'mpl-2.0',
      'Apache License 2.0': 'apache-2.0',
      'MIT License': 'mit',
      'Boost Software License' : 'bsl-1.0',
      'Unlicense' : 'unlicense'
    }
   var url = `https://choosealicense.com/licenses/${licenseDict[data.licenseChoice]}/`
  return `
## License

This project is covered under ${licenseDict[data.licenseChoice]}.
More information can be found here ${url} `
  } else {
    return ''
  }
}


module.exports = promptData => {
  return `
  # ${promptData.projectName}

  ${renderLicenseBadge(promptData)}

  ## Table of Contents

  - [Description](#description)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [Questions?](#questions?)
  
## Description

${promptData.projectDescription}

## Usage

${promptData.usage}

## Installation

${promptData.installationInstructions}

## Contributions

${promptData.contribution}

## Testing

${promptData.test}

${renderLicenseLink(promptData)}

## Questions?

My github profile can be found [here](https://github.com/${promptData.githubName}).
Contact me at ${promptData.email}.
`;
}
