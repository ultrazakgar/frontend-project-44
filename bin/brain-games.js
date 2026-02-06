#!/usr/bin/env node
/**
 * run game with arguments/ defaut - from node command line
 * @example `node bin/brain-games.js` 
 */
const args = process.argv.slice(2);
import readlineSync from 'readline-sync';
import parentGame from './games/parentGame.js';

let userName = 'anonymous', results = {};


    await parentGame.playGame('user',userName);
	userName = results['user'][0];
	await parentGame.playGame('hello',userName);
if (!!(args[0])) { // запустили не из экспортной версии?
     parentGame.playGame(args[0]);
} 

