import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js'
import {User} from '../models/user.model.js'
import {uploadOnCloudinaary} from '../utils/services/cloudinary.service.js'
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async(req, res)=>{
    // get user details from frontend
    // validation empty check
    //check if user already exists : username , email
    // check for images , check for avatar
    // upload them to cloudinary, check if avatar
    // create user object - create entry in db 
    // remove password and refresh token field from response
    //check for user creation 
    // retrun response,

    const {fullName, email, password,username} = req.body 
    // console.log("request body data part: ",req.body);

    // validation check field empty 
    
    if(
        [fullName, password,username,email].some((eachField)=> (eachField?.trim() ==="")
        ) 
    ) {
        throw new ApiError(400, "Every feilds are required")
    }

    // checking user already exists 


    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409, "this user name or email already exist")
    }

    //TODO: update this code filhaal ke liye comment rahega but ise me uncomment karunga 

/*
    // username check
    const existedUsername = User.findOne({username}) 
    if(existedUsername){
        throw new ApiError(409, "This username already exists try different")
    }

    //email checking
    const existedEmail = User.findOne({email}) 
    if(existedEmail){
        throw new ApiError(409, "This email already registred!")
    }

    **/

    //TODO: password validation check 

    //  const avatarLocalFile = req.files?.avatar[0]?.path;

    //improved code
    let avatarLocalFile; // we receive proper path jo multer ne upload kiya hai wo hame mil jayega
    if(req.files && Array.isArray(req.files.avatar) && req.files.avatar[0]){
        avatarLocalFile = req.files.avatar[0].path;
    }else{
        // if avatat file not receive
        throw new ApiError(400, "Avatar file is required");
    }

    //    console.log("req files data: ",req.files)

    //  const coverImageLocalFile = req.files?.coverImage[0]?.path; 

    let coverImageLocalFile;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalFile = req.files.coverImage[0].path;
    }

//upload in cloudinary
const avatar = await uploadOnCloudinaary(avatarLocalFile);

const coverImage = await uploadOnCloudinaary(coverImageLocalFile);

if(!avatar){
    throw new ApiError(400, "Avatar file is required");

}

// store in database 
const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "", // hai to url lelo nahi diya hai user ne to empty hi rahne do
    email,
    password,
    username: username.toLowerCase()
})

// remove password and refresh token 
const userIsCreated = await User.findById(user._id).select(
    "-password -refreshToken"
)

if(!userIsCreated){
    throw new ApiError(500, "something went wrong registring the user")
}

// retern the response 
return res.status(201).json(
    new ApiResponse(200, userIsCreated, "user registered successfully!!")
);

}) 


export {registerUser }