import {v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

// config
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinaary = async (localFilePath)=>{
    console.log(localFilePath)
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
        const responce = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto" 
        });
        fs.unlinkSync(localFilePath)
        return responce 

    } catch (error) {
        fs.unlinkSync(localFilePath);
        // remove the local saved tempory file as the upload operation got failed
        return null 
    }
}


export { uploadOnCloudinaary }
