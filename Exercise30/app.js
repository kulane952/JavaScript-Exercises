function operator(a, b,callback) {
    return callback(a, b);

}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition:", operator(10, 5, add)); // Output: 15
console.log("Subtraction:", operator(10, 5, subtract)); // Output: 5
console.log("Multiplication:", operator(10, 5, multiply)); // Output: 50
console.log("Division:", operator(10, 5, divide)); // Output: 2