require('dotenv').config()
require('module-alias/register')
// will automatically require 'index' file, 
// if there is any 'index' file
const startApplication = require('./app')

startApplication()