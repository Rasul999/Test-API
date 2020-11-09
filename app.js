const express = require('express')
const app = express()
const mongoose = require('mongoose')


const booksRouter = express.Router()
const PORT = 3000



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`, new Date())
})