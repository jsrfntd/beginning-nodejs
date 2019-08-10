//Callbacks with return
// The printString function doesn’t return anything and is independent, all we cared about was the order. But what
// if you wanted to take the output of the first function, do something with it in the second function,
// and then pass it to the third function?

function addString(previous, current, callback){
    setTimeout(
        () => {
            callback((previous + ' ' + current))
        },
        Math.floor(Math.random() * 100) + 1
    )
}

function addAll(){
    addString('', 'A', result => {
        addString(result, 'B', result => {
            addString(result, 'C', result => {
                console.log(result) // Prints out " A B C"
            })
        })
    })
}
addAll()

