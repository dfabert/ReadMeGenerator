var fs = require ('fs');
var inquirer = require("inquirer");

const questions = [
  {type: 'input', message:  'Enter the title of the project', name:  'title', default:  'Title'},
  {type: 'input', message:  'Enter the description of the project', name:  'description', default:  'No available description'},
  {type: 'input', message:  'Enter the installation instructions of the project', name:  'installation', default:  'No instalation guidelines noted'},
  {type: 'input', message:  'Enter the usage information fo the project', name:  'usage', default:  'No usage guidelines noted'},
  {type: 'input', message:  'Enter the contribution guidelines', name:  'contribution', default:  'No contributions noted'},
  //{type: 'list', message:  'Select License', name:  'License'}
  {type: 'input', message:  'Enter GitHub username', name:  'gitUser'},
  {type: 'input', message:  'Enter e-mail address', name:  'email'}
];

inquirer.prompt(questions).then((response) => {
  const fileName = response.title + '.md';
  fs.writeFile(fileName, '# ' + response.title, function(err){
    if (err){
      return console.log(err);
    }
  })
  console.log('A ReadMe file with the name ' + fileName + ' has been created');

  const content = `
  # ${response.title}

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

  ## Questions
  https://github.com/${response.gitUser}
  Any further questions, please e-mail me at:  ${response.email}
  
  `;

  fs.writeFile(fileName, content, function(err){
    if (err) {
      return console.log(err);
    }
  })
});
