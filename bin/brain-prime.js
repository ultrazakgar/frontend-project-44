#!/usr/bin/env node
/**
 * run game with arguments/ defaut - from node command line
 * @example `node bin/brain-games.js` 
 */
import {playGame} from '../games/playGame.js';

let results = {userName :'anonymous'};

await playGame('user',results);
results.userName = results['user'][0];
await playGame('hello',results);

await playGame('prime',results);
if(!results['prime_fault']){
    console.log(`Congratulations, ${results.userName}!`)
}
 