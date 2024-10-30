# String Calculator - TDD Kata

This repository contains a JavaScript solution to the String Calculator kata, completed as part of the Incubyte TDD assessment. This project demonstrates Test-Driven Development (TDD) principles, focusing on code readability, testability, and incremental development.

## Problem Statement

Create a `StringCalculator` class with a method named `add`, which accepts a single string of comma-separated numbers and returns the sum as an integer. The method should also support additional functionality, such as handling newlines and custom delimiters.

### Method Signature
```javascript

int add(string numbers)

Requirements

	1.	Handle Up to Two Numbers:
	•	The Add method should return the sum of up to two numbers separated by a comma.
	•	Examples:
	•	add("") should return 0.
	•	add("1") should return 1.
	•	add("1,2") should return 3.
	2.	Handle an Unknown Amount of Numbers:
	•	Allow the Add method to handle any number of comma-separated numbers.
	3.	Support New Lines as Delimiters:
	•	Allow new lines (\n) as additional delimiters.
	•	Example:
	•	add("1\n2,3") should return 6.
	•	Note: Inputs like add("1,\n") are invalid (for clarification only, not handled in the function).
	4.	Support Different Custom Delimiters:
	•	Specify a custom delimiter at the beginning of the string in the format //[delimiter]\n.
	•	Example:
	•	add("//;\n1;2") should return 3 (with ; as the delimiter).
	•	If no custom delimiter is specified, the function should default to commas and new lines.
	5.	Throw an Exception for Negative Numbers:
	•	If any negative numbers are in the input, throw an exception with a message listing all negative values.
	•	Example:
	•	add("1,-2,3,-4") should throw an error with the message "Negative numbers not allowed: -2, -4".
	6.	Ignore Numbers Greater Than 1000:
	•	Numbers larger than 1000 should be ignored in the sum.
	•	Example:
	•	add("2,1001") should return 2.
	7.	Support Delimiters of Any Length:
	•	Allow custom delimiters of any length in the format //[delimiter]\n.
	•	Example:
	•	add("//[***]\n1***2***3") should return 6.
	8.	Allow Multiple Delimiters:
	•	Allow multiple delimiters specified in the format //[delim1][delim2]\n.
	•	Example:
	•	add("//[*][%]\n1*2%3") should return 6.
	9.	Support Multi-Character Delimiters with Multiple Entries:
	•	Allow multiple delimiters where each delimiter can be more than one character.
	•	Example:
	•	add("//[***][%%]\n1***2%%3") should return 6.


Solution Overview

This solution was developed using TDD principles, with each requirement implemented step-by-step alongside test cases to verify correct behavior. Each stage of the function’s development is committed separately to demonstrate code evolution.

Setup Instructions

	1.	Clone the Repository:
    •   git clone https://github.com/cnu01/StringCalculator

    2.	Install Dependencies:
        npm install

    3.	Run Tests:
	    npm test

    4.	Run the Application:
        npm start

Examples
	
    console.log(add(''));
    console.log(add('10'));
    console.log(add('1,5'));
    console.log(add('1,2,3,4'));
    console.log(add('1,2\n,3,4'));
    console.log(add('1\n'))
    console.log(add("//;\n1;2;5;6;7;\n8;9;\n10"));
    console.log(add("//|\n2|3|4"));
    console.log(add("//#\n5#6#7"));
    console.log(add("1,-2,3,-4"));
    console.log(add("2,1001,6"));
    console.log(add("//[***]\n1***2***3"));
    console.log(add("//[*][%]\n1*2%3"));
    console.log(add("//[##][%%]\n4##5%%6"));

Development Notes

	•	This solution follows TDD principles:
	•	Each requirement has an associated test case, and the function was iteratively built with each test in mind.
	•	Only minimal code was written to make each test pass, with refactoring done as needed to keep the function readable and efficient.