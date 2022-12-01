// const mongoose = require('mongoose')

// const username = process.env.MONGODB_USERNAME
// const password = process.env.MONGODB_PASSWORD
// const dbName = process.env.MONGODB_DATABASE

// mongoose
//   .connect(`mongodb+srv://${username}:${password}@cluster0.ywoqnd8.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('connection established'))
//   .catch(error => console.log('not connected:', error))

const mongoose = require('mongoose')

// eslint-disable-next-line prefer-const
let connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017'

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(error => console.log('not connected:', error))

const Panda = mongoose.model('Panda', { name: String })

async function getPandas() {
  const pandas = await Panda.find({ age: { $lte: 28 } }).then(console.log)
}

getPandas()

// const panda = new Panda({ name: 'Joseph', age: 40 })

// panda.save().then(() => console.log(`we have a new panda, ${panda.name}!`))
