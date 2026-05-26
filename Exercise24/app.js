function calculate(width, height=width) {
    const area = width * height;
    return area;

}
console.log(calculate(5)); // Output: 25
console.log(calculate(5, 10)); // Output: 50