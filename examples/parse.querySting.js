
const queryString = require('querystring');

const url = 'http://www.opencanvas.co.uk?myName=Burak&myAge=27&comment=Yes+I+am+getting+old';
const parsedUrl = queryString.parse(url.substring(url.indexOf('?') + 1));

console.log(`Hi my name is ${parsedUrl.myName}`);
console.log(`I am ${parsedUrl.myAge}`);
console.log(`Oh and... ${parsedUrl.comment}`);