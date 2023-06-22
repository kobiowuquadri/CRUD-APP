const mongoose = require('mongoose')
const express = require('express')
const app = express()
const methodOverride = require('method-override')
require('./models/database')
const userModel = require('./models/userModel')
const router = require('./routes/userRoutes')

const port = 3030
app.listen(port, () => console.log(`Server is running on port ${port}`))

// middlewares
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/img', express.static(__dirname + '/public/img'))
app.use(methodOverride('_method'))
app.use(router)

// home route(results)
app.get('/', async (req, res) => {
  await userModel
    .find()
    .then(result => {
      res.render('index', { title: 'Home Page', result })
    })
    .catch(error => console.log(error))
})
