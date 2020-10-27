const { request, response } = require('express')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const booksRouter = require('./controllers/books.js')



app.use('/books', booksRouter)



app.listen(3001, () => {
    console.log("app is running")
}
)