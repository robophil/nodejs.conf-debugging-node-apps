const numbers = require('../data/numbers.json')

console.log(
  numbers.reduce((sum, number) => {
    sum += number
    return sum
  }, 0)
)
