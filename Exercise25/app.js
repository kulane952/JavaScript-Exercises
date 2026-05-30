//  spread operator

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]


//Rest Parameter 

function multiply (...numbers) {
    return numbers.reduce((total, num)=> total * num, 1);
}

console.log(multiply(2, 3)); // Output: 6
console.log(multiply(2, 3, 4)); // Output: 24