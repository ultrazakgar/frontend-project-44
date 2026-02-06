import parentGame from './parentGame.js';
import readlineSync from "readline-sync";

class nodGame extends parentGame {

    rounds = 3;

    description = `Find the greatest common divisor of given numbers.`

    gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    /**
     * Just return 3 values
     * @param idx from 0 to rounds
     * @returns {(string|*)[]}
     */
    play(idx) {

        let n1 = this.rand(2, 100)
        let n2 = this.rand(2, 100)

        let correctAnswer = this.gcd(n1, n2)

        for (let x = 1; x <= 3; x++) {
            if (correctAnswer == 1) {
                n1 = this.rand(2, 100)
                n2 = this.rand(2, 100)
                correctAnswer = this.gcd(n1, n2)
            } else {
                break
            }
            // not the "best" approach but it decreases the odds of gcd being 1 (quite common), plus this is purely optional
        }
        return [`Question: ${n1} ${n2}`, `Your answer: `, correctAnswer];
    }

}

export default new nodGame()

