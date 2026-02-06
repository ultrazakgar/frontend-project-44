import parentGame from './parentGame.js';

class progrGame extends parentGame {

    rounds = 3;

    description = `What number is missing in the progression?`

    calculate = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b
    }

    /**
     * Just return 3 values
     * @param idx from 0 to rounds
     * @returns {(string|*)[]}
     */
    play(idx) {

        let length = this.rand(9, 11)
        let start = this.rand(2, 10)
        let increment = this.rand(2, 9)
        let incGrowth = this.rand(0, 1) // extra difficulty

        if (incGrowth > 0) { // it was too hard
            increment = this.rand(1, 5)
        }

        let missingNumber = this.rand(1, length)

        let list = [start]

        for (let y = 1; y <= length - 1; y++) {
            list[y] = list[y - 1] + increment
            increment += incGrowth
        }

        let correctAnswer = list[missingNumber - 1]

        list[missingNumber - 1] = ".."

        return [`Question: ${list.join(' ')}`, `Your answer: `, correctAnswer];
    }

}

export default new progrGame()
