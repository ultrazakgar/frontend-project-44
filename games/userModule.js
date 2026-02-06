/**
 * just to pick a username
 */
class userName {
    rounds = 1;

    /** `` - mean silent */
    description = ``;

    /**
     * Just return 3 values
     * @param idx from 0 to rounds
     * @returns {(string|*)[]}
     */
    play(idx) {
        return [`May I have your name?`, `Your: `, null];
    }

}

export default new userName()
