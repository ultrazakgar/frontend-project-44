import parentGame from './parentGame.js';

class evenOddGame extends parentGame {
    rounds = 3;
    description = `Answer "yes" if the number is even, otherwise answer "no".` ;

    isEven(number) {
        return number / 2 === Math.floor(number / 2)
    }

    play(idx){
        let number = this.rand(1, 100000)
            let even = this.isEven(number)
            return [`Question: ${number}`, `Your answer: `, even?'yes':'no'];
    }
}
export default new evenOddGame()
