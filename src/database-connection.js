const mongoose = require('mongoose')

// eslint-disable-next-line prefer-const
let connectionString =
  process.env.MONGODB_CONNECTION_STRING ||
  'mongodb+srv://sopra:<password>@cluster0.ywoqnd8.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(error => console.log('not connected:', error))
