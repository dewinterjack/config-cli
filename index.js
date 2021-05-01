const fs = require('fs');
const {promisify} = require('util')
const readFile = promisify(fs.readFile);
const readStream = fs.createReadStream;


async function extendsJson(projectPath) {
    const eslintPath = projectPath + '/eslintrc.json';
    const defaultEslint = JSON.stringify({"extends": "@mycompany/eslint-config"});
    try {
        let data = await readFile(eslintPath, 'utf8')
        console.log(data)
    } catch (e) {
        fs.writeFileSync(eslintPath, defaultEslint);
    }
}

extendsJson('D:/Code/shared-config');
