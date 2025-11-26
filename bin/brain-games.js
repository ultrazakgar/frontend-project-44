#!/usr/bin/env node

const debugMode = true

// cd C:\Users\sshvi\Downloads\frontend-project-44-main
// node bin/brain-games.js

import readlineSync from 'readline-sync';

console.log(`Welcome to the Brain Games!`)

let name = ""

if (debugMode) {
	name = "Developer"
} else {
	name = readlineSync.question(`May I have your name? `);
}

console.log(`Hello, ${name}!`);

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
	return number/2 == Math.floor(number/2)
}

const totalQuestions = 3

function compareAnswers(answer,correctAnswer,questionNumber) {
	let correct = (answer == correctAnswer)

	if (correct) {
		console.log("Correct!");
		if (questionNumber == totalQuestions) {
			console.log(`Congratulations, ${name}!`)
		}
	} else {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
		console.log(`Let's try again, ${name}!`)
	}

	return(correct)
}

function EvenOddGame() {
	console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

	for (let x = 1; x <= totalQuestions; x++) {
		let number = rand(1,100000)

		let even = isEven(number)
		
		console.log(`Question: ${number}`);

		let answer = readlineSync.question(`Your answer: `);
		let correctAnswer
		
		if (even) {
			correctAnswer = "yes";
		} else {
			correctAnswer = "no";
		}

		if (compareAnswers(answer,correctAnswer,x) == false) {
			break
		} 
	}
	
	return
}

const calculate = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b
};

function CalcGame() {
	console.log(`What is the result of the expression?`)

	for (let x = 1; x <= totalQuestions; x++) {
		let num1 = rand(0,10)
		let num2 = rand(0,10)

		if (rand(0,10000)) { // super hard mode
			num1 = rand(100,10000)
			num2 = rand(100,10000)
		}

		let action = ["+","-","*"][rand(0,2)]
		
		console.log(`Question: ${num1} ${action} ${num2}`);

		let answer = readlineSync.question(`Your answer: `);
		let correctAnswer

		correctAnswer = calculate[action](num1, num2);
		
		if (compareAnswers(answer,correctAnswer,x) == false) {
			break
		} 
	}
	
	return
}

CalcGame()

// EvenOddGame()


