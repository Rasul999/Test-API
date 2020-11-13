const express = require('express')
const app = express()
const config = require('config')
const mongoose = require('mongoose')

const booksRouter = express.Router()

const PORT = config.get('port') || 3000



async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`, new Date()))

  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}



start()

