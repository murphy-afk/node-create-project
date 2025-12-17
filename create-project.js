const fs = require('fs');

const projectName = process.argv[2];
const authorName = process.argv[3]

fs.mkdirSync(projectName);

const jsonContent = {
  name: `${projectName}`,
  version: "1.0.0",
  description: "",
  license: "ISC",
  author: `${authorName}`,
  type: "module",
  main: "app.js",
  scripts: {
    start: "node app.js",
    dev: "node --watch app.js"
  },
  dependencies: {
    "express": "^5.2.1"
  }
}

const appContent = "console.log('hello world')";


fs.writeFileSync(`${projectName}/app.js`, appContent);

fs.writeFileSync(`${projectName}/package.json`, JSON.stringify(jsonContent, null, 2));

fs.writeFileSync(`${projectName}/.gitignore`, 'node_modules')

console.log('project created successfully now type cd project-name npm install npm run dev');

