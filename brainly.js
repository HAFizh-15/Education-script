const axios = require('axios')
const get = require('got')
const key = require('./data/key.json')
const soal = require('./data/soal.json')
const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

axios.get(`https://api.vhtear.com/branly?query=${soal.brainly}&apikey=${key.vhtear}`).then((data) => {
const {data : { result } } = data
console.log(color('[Brainly]', 'green'), `${result.data}`)
})
