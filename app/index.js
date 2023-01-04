const express = require('express')
const app = express()

// require will return a method and the app is an argument to the method
require('./bootstrap')(app)
// require('./middlewares')(app)

// instead of requiring the 'routes' 's module (index.js) and then write 'app.use(the route object)'
// we requiring the 'routes' and calling the method, then passing the 'app' as an argument
// and we use the app (app.use) in the other file to keep this module clean out of configs
require('./routes')(app)

module.exports = () => {
    const port = process.env.APP_PORT
    app.listen(port, () => {
        console.log(`App is running on port ${port}`)
    })
}