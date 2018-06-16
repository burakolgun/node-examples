console.log(`This process is pid -> ${ process.pid }`);

process.stdout.write('Hello, I am writing to standard output \n');
    process.stdout.write(

    `Cureent working directory: ${ process.cwd() } \n`
);

console.log(`This script has been running for ${ process.uptime() } seconds`)


process.on('exit', (code => {
    console.log(`The process has now finished, exiting with code: ${ code }`);
}));