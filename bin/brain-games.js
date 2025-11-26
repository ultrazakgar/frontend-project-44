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

function compareAnswers(a1,a2) {
	correct = (answer === correctAnswer)

	return(correct)
}

function EvenOddGame() {
	console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

	let totalQuestions = 3
	let winner = true	

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

		if (answer === correctAnswer) {
			console.log("Correct!");
		} else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
			winner = false;
			break;
		}
	}
	
	if (winner) {
		console.log(`Congratulations, ${name}!`)
		// no looping
	} else {
		console.log(`Let's try again, ${name}!`)
		EvenOddGame() // looped until succesful
	}
	
	return
}

EvenOddGame()


