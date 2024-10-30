function add(numbers) {
    numbers = String(numbers);
    const sanitizedNumbers = numbers.replace(/\n/g, ",");

    if (sanitizedNumbers === "") {
        return 0;
    }

    const numberArray = sanitizedNumbers.split(",").filter(num => num !== ""); 
    return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(add(''));
console.log(add('10'));
console.log(add('1,5'));
console.log(add('1,2,3,4'));
console.log(add('1,2\n,3,4'));
console.log(add('1\n'))

module.exports = add;