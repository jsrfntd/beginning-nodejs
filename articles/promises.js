// The problem with callbacks is it creates something called “Callback Hell.” Basically,
// you start nesting functions within functions within functions,
// and it starts to get really hard to read the code.

// This is called a Promise Chain. You can see that the code returns the result of the
// function (which will be a Promise), and this gets sent to the next function in the chain.

function printString(string){
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(string)
                resolve()
            },
            Math.floor(Math.random() * 100) + 1
        )
    })
}

function printAll1(){
    printString("A")
        .then(() => {
            return printString("B")
        })
        .then(() => {
            return printString("C")
        })
}


function printAll2(){
    printString("A")
        .then(() => printString("B"))
        .then(() => printString("C"))
}


function hub(func,callback){
    func();
    callback
}

hub(printAll1, printAll2)