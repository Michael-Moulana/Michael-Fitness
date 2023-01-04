const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')


// app is an argument for the arrow function
// will return a method/function
module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.engine('handlebars', hbs.engine())
    app.set('view engine', 'handlebars')
    app.set('views', path.join(__dirname, '../views'))
    app.use('/static', express.static(path.join(__dirname, '../../public')))

}