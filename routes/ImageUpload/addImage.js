const express = require('express')
const router = express.Router();
const ImageUpload=require('./ImageUploader');

router.post('/addimage',ImageUpload.upload.array('upload'), function(req,res){
    
    let statedImage = [];
    req.files.forEach(imagenme => {
        statedImage.push(imagenme.filename)
    });
    res.json({
        imageNames:statedImage
    })
});

module.exports = router;