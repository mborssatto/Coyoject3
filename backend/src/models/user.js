/* MY OLD CLASS - REFACTOR
class User {
  constructor(name) {
    this.name = name
    this.favoriteEvents = []
  }

  addToFavorites(event) {
    event.favoritedBy.push(this)
    this.favoriteEvents.push(event)
  }
}

module.exports = User
*/

const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bio: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

class User {
  greet(person) {
    console.log(`Hello ${person.name}, this is ${this.name}`)
  }

  get profile() {
    return `
      # ${this.name} (${this.age})
      Bio: ${this.bio}
    `
  }

  set profile(newValue) {
    throw new Error(`profile is only a getter. You can't override it with ${newValue}.`)
  }
}

userSchema.loadClass(User) // loads the class User to the userSchema so that we can use its methods
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
