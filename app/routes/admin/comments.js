const express = require('express')
const router = express.Router()

// controller
const commentsController = require('@controllers/admin/comments')

// post routes
router.get('/', commentsController.index)

module.exports = router