const fs = require("fs")
const readLine = require("readline")

// fs.writeFile("text.txt", 'good morning', (err) => {
// if(err){
//     console.log(err);
// }

//     console.log("file created succesfully");

// })


// for read file

// fs.readFile("text.txt", 'utf8', (err,data) => {
//     if(err){
//         console.log(err);
//     }
    
//         console.log(data);
    
//     })


    // how to take in input and output in node

    const inputOutput = readLine.createInterface({
        input: process.stdin,
         output: process.stdout,

        })

        //  how can we use it
        inputOutput.question("what is your name", (name) => {
            console.log(`my name is ${name}`)
        })

    