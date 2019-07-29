foo = {
    bar: 123,
    bas: function () {
        console.log('inside this.bar is:', this.bar);
    }
}
console.log('foo.bar is: ', foo.bar); // foo.bar is: 123
foo.bas(); // inside this.bar is: 123

function foo2() {
    console.log('is this called from globals? : ', this === global); // true
}
foo2();

var foo3 = {
    bar: 123
};
function bas() {
    if (this === global)
        console.log('called from global');
    if (this === foo3)
        console.log('called from foo3');
}
// global context
bas(); // called from global
// from foo
foo3.bas = bas;
foo3.bas(); // called from foo3