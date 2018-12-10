const {exec} = require('child_process');
const path = require('path');
const fs = require('fs');

const projectFile = fs.readFileSync(path.join(__dirname, 'secret/project.json'), 'utf8');
const projectId = JSON.parse(projectFile).key;

const args = {
  codeType: 'TypeScript',
  moduleResolution: 'ES2015',
  projectId
};

const argStr = Object.keys(args).reduce((str, key) => str + ` --${key}=${args[key]}`, '');

exec([
  'cd src/types', 
  'mkdir imported', 
  'cd imported', 
  `node ../../../node_modules/.bin/kc-generate ${argStr}`
].join(' && '), () => {
  console.log('done!');
});
