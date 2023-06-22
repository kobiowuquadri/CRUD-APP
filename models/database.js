const mongoose = require('mongoose')

const connectToDatabase = () => {
  // connect db
  mongoose
    .connect('mongodb://0.0.0.0:27017/QodeDB')
    .then(() => console.log('Database Connected Successfully'))
    .catch(error => console.log(error))
}

connectToDatabase()
