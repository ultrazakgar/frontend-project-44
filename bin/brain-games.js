#!/usr/bin/env node

const debugMode = true

// cd C:\Users\sshvi\Downloads\frontend-project-44-main
// node bin/brain-games.js

// Добавьте в README.md аскинему с запуском и демонстрацией различных исходов игры.
// Добавьте в директорию bin новый исполняемый файл с названием brain-calc.js.

// Запишите аскинему с примером установки пакета, запуска игры, победой и поражением игрока. Опубликуйте её в сервисе и добавьте ссылку в README.md.
// https://asciinema.org/

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

function gcd(a, b) {
	while (b !== 0) {
		let temp = b;
		b = a % b;
		a = temp;
	}
	return a;
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
		let num1 = rand(0,25)
		let num2 = rand(0,25)

		if (rand(0,10000) == 0) { // super hard mode
			num1 = rand(100,10000)
			num2 = rand(100,10000)
		}

		let action = ["+","-","*"][x-1]
		
		console.log(`Question: ${num1} ${action} ${num2}`);

		let answer = readlineSync.question(`Your answer: `);
		let correctAnswer = calculate[action](num1, num2);
		
		if (compareAnswers(answer,correctAnswer,x) == false) {
			break
		} 
	}
	
	return
}

function NodGame() {
	console.log(`Find the greatest common divisor of given numbers.`)

	for (let x = 1; x <= totalQuestions; x++) {
		let n1 = rand(2,100)
		let n2 = rand(2,100)

		let correctAnswer = gcd(n1,n2)
		
		for (let x = 1; x <= 3; x++) {
			if (correctAnswer == 1) {
				n1 = rand(2,100)
				n2 = rand(2,100)
				correctAnswer = gcd(n1,n2)
			} else {
				break
			}
			// not the "best" approach but it decreases the odds of gcd being 1 (quite common), plus this is purely optional
		}		
		console.log(`Question: ${n1} ${n2}`);

		let answer = readlineSync.question(`Your answer: `);

		if (compareAnswers(answer,correctAnswer,x) == false) {
			break
		} 
	}
	
	return
}

NodGame()

// CalcGame()

// EvenOddGame()


