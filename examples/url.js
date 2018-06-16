const url = require('url');

const args = process.argv.slice(2);
const [urlEntered] = args;

if (urlEntered ===undefined) {
    console.error(
        'Please pass a URL e.g. http://www.opencanvas.co.uk?myName=Shaun&myAge=28&comment=Yes+I+am+getting+old')
    process.exit(0);
}

const { protocol, slashes, host, query, href } = url.parse(urlEntered);

console.log(`Using Protocol: ${ protocol }`)
console.log(`Using Slashes: ${ slashes }`)
console.log(`Host: ${ host }`)
console.log(`Query: ${ query }`)
console.log(`Href: ${ href }`)
