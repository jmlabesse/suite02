/*

    Eval Expr

    Write a function "evalExpr" that can solve simples arithmetic calculs;

    We will pass only positive integer numbers.

    Exemples:

    evalExpr(4, 5, "*"); // 20
    evalExpr(3, 3, "+"); // 6
    evalExpr(2, 2, "%"); // 0
    evalExpr(3, 3, "-"); // 0
    evalExpr(10, 2, "/"); // 5

    evalExpr(10, 0, "/"); // 0

    Validation:
    I want to see at least 6 functions.

    Write your own tests !
    
    Forbidden functions:
    eval

*/

// write your code below this comment
function addition(nombre1, nombre2) {
    return nombre1 + nombre2;
}
function soustraction(nombre1, nombre2) {
    return nombre1 - nombre2;
}
function multiplication(nombre1, nombre2) {
    return nombre1 * nombre2;
}
function division(nombre1, nombre2) {
    return (nombre2 === 0 ? 0 : nombre1 / nombre2);
}
function modulo(nombre1, nombre2) {
    return nombre1 % nombre2;
}
function evalExpr(nombre1, nombre2, operateur) {
    switch (operateur) {
        case "+":
            return addition(nombre1, nombre2);
            break;
        case "-":
            return soustraction(nombre1, nombre2);
            break;
        case "*":
            return multiplication(nombre1, nombre2);
            break;
        case "/":
            return division(nombre1, nombre2);
            break;
        case "%":
            return modulo(nombre1, nombre2);
            break;
        default:
            return "Opération impossible";
    }
}

// Tests
console.log(evalExpr(4, 5, "*")); // 20
console.log(evalExpr(3, 3, "+")); // 6
console.log(evalExpr(2, 2, "%")); // 0
console.log(evalExpr(3, 3, "-")); // 0
console.log(evalExpr(10, 2, "/")); // 5

console.log(evalExpr(10, 0, "/")); // 0