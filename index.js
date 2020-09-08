var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter title of the project",
      name: "title"
    },
    {
      type: "input",
      message: "Enter the description of the project",
      name: "username"
    },
    {
      type: "input",
      message: "Enter the installation instructions of the project",
      name: "installation"
    },
    {
      type: "input",
      message: "Enter the usage information of the project",
      name: "usage"
    },
    {
      type: "input",
      message: "Enter the contributtion guidelines",
      name: "contribution"

    },
  ])
  .then(function(response) {
    console.log(response.title)


  })