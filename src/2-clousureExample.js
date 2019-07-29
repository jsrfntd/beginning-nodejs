//Declaracion e funcion con clousure
function highClassFunction(functionParam ,arg) {
    functionParam(arg);
    var variableInOuterFunction = arg;
    function bar() {
        console.log(variableInOuterFunction); // Access a variable from the outer scope
    }
    // Llamado a la función declarada localmente
    bar();
}

function parameterFunction(arg){
    console.log("Executing parameterFunction "+arg)
}

highClassFunction(parameterFunction,'closure!');