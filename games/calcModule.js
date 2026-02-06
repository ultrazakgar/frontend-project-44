import parentGame from './parentGame.js'

class calcGame extends parentGame {
  rounds = 3

  description = `What is the result of the expression?`

  calculate = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  }

  /**
     * Just return 3 values
     * @param idx from 0 to rounds
     * @returns {(string|*)[]}
     */
  play(idx) {
    let num1 = this.rand(25),
      num2 = this.rand(25)

    if (this.rand(1000) === 0) { // super hard mode
      num1 = 100 + this.rand(9900)
      num2 = 100 + this.rand(9900)
    }

    let action = ['+', '-', '*'][idx]

    return [`Question: ${num1} ${action} ${num2}`, `Your answer: `, this.calculate[action](num1, num2)]
  }
}

export default new calcGame()
