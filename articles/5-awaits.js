// Await is basically syntactic sugar for Promises. It makes your asynchronous code look more like
// synchronous/procedural code, which is easier for humans to understand.

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

async function printAll(){
    await printString("A")
    await printString("B")
    await printString("C")
}
printAll()