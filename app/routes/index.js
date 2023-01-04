// all routers
const adminRouter = require('./admin')
const homeRouter = require('./home')
const authRouter = require('./auth')
module.exports = app => {
    app.use('/', homeRouter)
    app.use('/admin', adminRouter)
    app.use('/login', authRouter)
}