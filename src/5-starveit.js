// utility funcion
function fibonacci(n) {
    if (n < 2)
        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}
// setup the timer
console.time('timer');
setTimeout(function () {
    console.timeEnd('timer'); // Prints much more than 1000ms
}, 2000)
// Start the long
fibonacci(44);