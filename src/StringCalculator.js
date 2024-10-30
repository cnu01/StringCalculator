function add(numbers) {
    numbers = String(numbers);

    if (numbers === "") {
        return 0;
    }

    if (!numbers.includes(",")) {
        return parseInt(numbers);
    }

    const numberArray = numbers.split(",");
    return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;