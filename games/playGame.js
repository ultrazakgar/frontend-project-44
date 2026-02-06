import readlineSync from 'readline-sync'

function playGame(game_name, results) {
  return import(`./${game_name}Module.js`)
    .then((module) => {
      let game = module.default
      let rounds = game.rounds || 3
      results[game_name] = []
      if (game.description)
        console.log(game.description)
      for (let i = 0; i < rounds; i++) {
        let [question, mark, correct] = game.play(i, results), userAnswer
        if (question)
          console.log(`${question}`)
        if (null !== mark) {
          userAnswer = readlineSync.question(`${mark}`)
          results[game_name].push(userAnswer)
        }
        if (correct !== null) {
          if (userAnswer === correct.toString().toLowerCase()) {
            console.log('Correct!')
          }
          else {
            results[`${game_name}_fault`] = 1
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${results.userName}!`)
            break
          }
        }
      }
    }).catch(err => console.log(`Sorry, game ${game_name} not found.`, err))
}

export async function doit(game) {
  let results = { userName: 'anonymous' }

  await playGame('user', results)
  results.userName = results['user'][0]
  await playGame('hello', results)

  if (game) {
    await playGame(game, results)
    if (!results[`${game}_fault`]) {
      console.log(`Congratulations, ${results.userName}!`)
    }
  }
}
