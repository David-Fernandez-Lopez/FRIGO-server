
const uploadImage =  (req, res) => {
    
    if (!req.file) {
        res.status(500).json({ message: 'Error loading file' })
        return
    }

    res.json({cloudinary_url:req.file.path})
}

module.exports = {
    uploadImage
}
