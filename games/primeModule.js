import parentGame from './parentGame.js'

class primeModule extends parentGame {
  rounds = 3
  description = `Answer "yes" if given number is prime. Otherwise answer "no".`

  isPrime(number) {
    if (number < 2) return false
    if (number === 2) return true
    if (number % 2 === 0) return false

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) return false
    }

    return true
  }

  play() {
    let number = this.rand(1, 100)
    let prime = this.isPrime(number)
    return [`Question: ${number}`, `Your answer: `, prime ? 'yes' : 'no']
  }
}

export default new primeModule()
