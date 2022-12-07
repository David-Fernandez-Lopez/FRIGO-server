const express = require('express')
const router = express.Router()
const uploader = require('../config/cloudinary.config')
const { uploadImage } = require('../controllers/upload.controller')


router.post('/image', uploader.single('imageData'), uploadImage)


module.exports = router