const express = require('express')
const router = express.Router()
const homeController = require('@controllers/front/home')

router.get('/', homeController.index)
router.get('/contact', homeController.contact)
router.get('/biography', homeController.biography)
router.get('/fitplans', homeController.fitplans)
router.get('/fitplan', homeController.fitplan)





module.exports = router