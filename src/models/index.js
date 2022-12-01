const User = require('./user')
const Event = require('./event')

const eventOne = new Event('Festival One', ['Maria Bethânia', 'Caatano Veloso'], '2022-11-01', 'HKW', 'Berlin')
const eventTwo = new Event('Festival two', ['Mulatu Astatke'], '2022-12-01', 'HKW', 'Berlin')
const eventThree = new Event('Festival Three', ['Gal Costa'], '2022-10-01', 'Teatro Central', 'São Paulo')
const events = [eventOne, eventTwo, eventThree]

// MOCK User input
const dateRangeStart = '2022-11-01'
const dateRangeEnd = '2022-12-08'
const city = 'Berlin'

function filter(el) {
  return el.date >= dateRangeStart && el.date <= dateRangeEnd && el.city === city
}

const filteredList = events.filter(filter)

// console.log(eventOne.detail)
// console.log(filteredList)
// console.log(eventTwo)

// Users from template

const armagan = new User('armagan', 20)
const steve = new User('steve', 22)

const users = [armagan, steve]

module.exports = { users, events }
