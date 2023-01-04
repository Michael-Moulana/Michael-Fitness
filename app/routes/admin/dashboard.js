const express = require('express')
const router = express.Router()

// controller
const dashboardController = require('@controllers/admin/dashboard')

// routes
router.get('/', dashboardController.index)

module.exports = router