const args = process.argv.slice(2);
const[name] = args

if (name === undefined) {
    console.error('Please pass a name, e.g. node cli=parameter-pass.js Name');
    process.exit(0);
}

console.log(`Good day to you, ${name}`);