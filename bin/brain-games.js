#!/usr/bin/env node
/**
 * run game with arguments/ defaut - from node command line
 * @example `node bin/brain-games.js` 
 */
const args = process.argv.slice(2);
import readlineSync from 'readline-sync';

let userName = 'anonymous', results = {};

function playGame(game_name,userName) {
    return import(`../games/${game_name}Module.js`)
        .then(module => {
            let game = module.default
            let rounds = game.rounds || 3;
            results[game_name] = [];
            if (!!game.description)
                console.log(game.description || 'Game have no decription, just do what you want');
            // game=game.default.get();
            for (let i = 0; i < rounds; i++) {
                let [question, mark, correct] = game.play(i,userName), userAnswer;
                if(!!question)
                    console.log(`${question}`);
                if(null !== mark) {
                    userAnswer = readlineSync.question(`${mark}`);
                    results[game_name].push(userAnswer);
                }
                if (correct !== null) {
                    if (userAnswer === correct.toString().toLowerCase()) {
                        console.log('Correct!');
                    } else {
                        if (i + 1 === rounds) {
                            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
                        } else {
                            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`);
                        }
                    }
                }
            }
        }).catch(err => console.log(`Sorry, game ${args[0]} not found.`));
}

if (!!(args[0])) { // запустили не из экспортной версии?
     playGame('user');
     userName = results['user'][0];
     playGame(args[0]);
} else {
    await playGame('user',userName);
	userName = results['user'][0];
	await playGame('hello',userName);
}
export default playGame;
