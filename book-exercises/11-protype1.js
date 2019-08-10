// It is a common misunderstanding that JavaScript isn’t object-oriented. It is indeed true that until recently JavaScript
// has not had the class keyword. But functions in JavaScript are more powerful than they are in many other languages
// and can be used to mimic traditional object oriented principles. The secret sauce is the new keyword (which you have
// already seen) and a property called the prototype. Every object in JavaScript has an internal link to another object
// called the prototype.

// Lets create a test function and set a member on its prototype
function foo() { };
foo.prototype.bar = 123;
// Lets create a object using `new`
// foo.prototype will be copied to bas.__proto__
var bas = new foo();
// Verify the prototype has been copied
console.log(bas.__proto__ === foo.prototype); // true
console.log(bas.bar); // 123