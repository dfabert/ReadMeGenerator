var fs = require ('fs');
var inquirer = require("inquirer");

const licenseChoices = [
  {name:  'MIT', value: {title: 'The MIT License', image:  'https://img.shields.io/badge/License-MIT-yellow.svg', link:'https://opensource.org/licenses/MIT'}},
  {name:  'Mozilla', value: {title: 'MPL 2.0', image:  'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg', link:'https://opensource.org/licenses/MPL-2.0'}},
  {name:  'IBM', value: {title: 'IPL 1.0', image:  'https://img.shields.io/badge/License-IPL%201.0-blue.svg', link: 'https://opensource.org/licenses/IPL-1.0'}}
];

const questions = [
  {type: 'input', message:  'Enter the file name for the project', name:  'fileName', default:  'README.md'},
  {type: 'input', message:  'Enter the title of the project', name:  'title', default:  'Title'},
  {type: 'input', message:  'Enter the description of the project', name:  'description', default:  'No available description'},
  {type: 'input', message:  'Enter the installation instructions of the project', name:  'installation', default:  'No instalation guidelines noted'},
  {type: 'input', message:  'Enter the usage information for the project', name:  'usage', default:  'No usage guidelines noted'},
  {type: 'input', message:  'Enter the test information for the project', name:  'usage', default:  'No test guidelines noted'},
  {type: 'input', message:  'Enter the contribution guidelines', name:  'contribution', default:  'No contributions noted'},
  {type: 'list', message:  'Select License', name:  'License', choices: licenseChoices},
  {type: 'input', message:  'Enter GitHub username', name:  'gitUser'},
  {type: 'input', message:  'Enter e-mail address', name:  'email'}
];

inquirer.prompt(questions).then((response) => {
  //Creating the content for the file
  const content = `
  
  # ${response.title}
 
  [![${response.License.title}](${response.License.image})](${response.License.link})
  

  ## Table of Contents
  * [Description of the Project](#Description-of-the-project)
  * [Installation Guidelines](#Installation-Guidelines)
  * [Usage Guidelines](#Usage-Guidelines)
  * [Contributions](#Contributions)
  * [License](#License)
  * [Questions](#Questions)

  ## Description of the Project
  ${response.description}

  ## Installation Guidelines
  ${response.installation}

  ## Usage Guidelines
  ${response.usage}

  ## Contributions
  ${response.contribution}

  ## License
  This application is covered by the following license:  
  ${response.License.title}  
  [Click here for more information](${response.License.link})

  ## Questions
  Github Repository: https://github.com/${response.gitUser}  
  Any further questions, please e-mail me at:  ${response.email}
  
  `;

  //Placing the content in the file
  fs.writeFile(response.fileName, content, function(err){
    if (err) {
      return console.log(err);
    }
  })

  console.log('A ReadMe file with the name ' + response.fileName + ' has been created');
});
