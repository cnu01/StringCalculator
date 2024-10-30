function add(numbers) {
    numbers = String(numbers);
    let delimiterPattern = /,|\n/;

    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("]\n");
        const customDelimiter = numbers.substring(3, delimiterEndIndex);
        delimiterPattern = new RegExp(`[${customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}]`);
        numbers = numbers.substring(delimiterEndIndex + 2); 
    }

    const numberArray = numbers.split(delimiterPattern).filter(num => num !== "");

    const negativeNumbers = numberArray.filter(num => parseInt(num) < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return numberArray.filter(num => parseInt(num) <= 1000).reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;