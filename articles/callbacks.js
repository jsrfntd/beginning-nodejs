// A callback is a function that is passed to another function. When the first function
// is done, it will run the second function.

function printString(string, callback){
    setTimeout(
        () => {
            console.log(string)
            callback();
        },
        Math.floor(Math.random() * 100) + 1
    )
}

function printAll(){
    printString("A", () => {
        printString("B", () => {
            printString("C", () => {})
        })
    })
}

printAll();




