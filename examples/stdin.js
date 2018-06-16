process.stdin.setEncoding('utf8');
process.stdout.write('Type something then hit enter: \n');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`You wrote: ${chunk}`);
        process.exit(0);
    }
})