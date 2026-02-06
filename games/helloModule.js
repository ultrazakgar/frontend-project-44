import parentGame from './parentGame.js';

/**
 * this game is just to write Hello and do nothing more
 */
class helloGame extends parentGame {

    rounds = 1;

    description = ``

    /**
     * Just return 3 values
     * @param idx from 0 to rounds
     * @returns {(string|*)[]}
     */
    play(idx) {
        return [`Welcome to the brain games!`, null, null];
    }

}

export default new helloGame()
