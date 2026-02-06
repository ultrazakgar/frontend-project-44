#!/usr/bin/env node
/**
 * run game with arguments/ defaut - from node command line
 * @example `node bin/brain-games.js` 
 */
const args = process.argv.slice(2);
import {playGame} from '../games/playGame.js';

let results = {userName :'anonymous'};

await playGame('user',results);
results.userName = results['user'][0];
await playGame('hello',results);

await playGame('evenodd',results);
if(!results['evenodd_fault']){
    console.log(`Congratulation, ${results.userName}!`)
}
 