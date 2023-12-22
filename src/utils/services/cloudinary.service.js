import {v2 as cloudinary} from 'cloudinary'
import { response } from 'express';
import fs from 'fs'



          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinaary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        //TODO: return "Cloud not find a path" ;
        // upload the file on cloudinary
        const responce = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto" 
        })
        // file has been uploaded successfully 
        console.log("file upload on cloudinary sccessfully",responce.url)

        return responce 

        //TODO: console responce to see what we get it and also read the cloudinary docs
    } catch (error) {
        fs.unlinkSync(localFilePath) 
        // remove the local saved tempory file as the upload operation got failed
        return null 

         //TODO: return "Cloud not find a path" ;
    }
}


export { uploadOnCloudinaary }



// TODO: remove all this after reading codes one more time 

// sample code we got in website 
// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });