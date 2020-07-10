// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://github.com/${data.github}/${data.title.toLowerCase().split(' ').join("-")})
  ## DESCRIPTION:
  ${data.description}

  ## TABLE OF CONTENTS

  * [Installation](#install)
  * [Usage](#usage)
  * [Contributing](#contribute)
  * [Tests](#test)
  * [Questions](#email)
              
  ## INSTALLATION INSTRUCTIONS:
  ${data.install}
  
  ## USAGE INFORMATIOB:
  ${data.usage}
  
  ## HOW TO CONTRIBUTE:
  ${data.contribute}
  
  ## TESTING INSTRUCTIONS:
  ${data.test}
  
  ## QUESTIONS:
  contact me at
  ${data.email}
  or
  https://github.com/${data.github}`;
}

module.exports = generateMarkdown;
