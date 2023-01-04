const express = require('express')
const router = express.Router()
const authController = require('@controllers/auth/auth')

router.get('/', authController.index)

module.exports = router