import multer from "multer";

// TODO: improve this more 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        //TODO: console the file and read more in docs
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ 
    storage, // es6 if key or value name same to ek hi baar bas thik hai
})