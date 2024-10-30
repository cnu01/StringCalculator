function add(numbers) {
    numbers = String(numbers);
    let delimiterPattern = /,|\n/;

    if (numbers.startsWith("//")) {
        const customDelimiter = numbers[2];
        delimiterPattern = new RegExp(`[${customDelimiter},\n]`);
        numbers = numbers.slice(4);
    }

    const numberArray = numbers.split(delimiterPattern).filter(num => num !== "");

    const negativeNumbers = numberArray.filter(num => parseInt(num) < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return numberArray.filter(num => parseInt(num) <= 1000).reduce((sum, num) => sum + parseInt(num), 0);
}


// console.log(add(''));
// console.log(add('10'));
// console.log(add('1,5'));
// console.log(add('1,2,3,4'));
// console.log(add('1,2\n,3,4'));
// console.log(add('1\n'))
// console.log(add("//;\n1;2;5;6;7;\n8;9;\n10"));
// console.log(add("//|\n2|3|4"));
// console.log(add("//#\n5#6#7"));
// console.log(add("1,-2,3,-4"));
// console.log(add("2,1001,6"))

module.exports = add;