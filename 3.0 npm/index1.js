// const generateSillyName = require("SillyName");

// const SillyName = generateSillyName();
// console.log(SillyName);


const generateSillyName = require("sillyname");
const readLine = require("readline")

const SillyName = generateSillyName();
console.log("welcome to sillyName");

const inputOutput = readLine.createInterface({
    input: process.stdin,
     output: process.stdout,

    })

    inputOutput.question("what is your name", (name) => {
        console.log(`Your name is ${name}`);
        console.log(`and your sillyName is ${SillyName}`);

    })
