import mongoose, {Schema} from "mongoose";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName:{
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String, // cloudinary url
            required: true,
        },
        coverImage:{
            type: String, // cloudinary url
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken:{
            type: String,
        }
            
        
    }, {timestamps: true}
)

// TODO: improve code with try catch after complete the project i will come here

userSchema.pre("save", async function (next){
    /*kaise check kare password ko to isModified() available hota hai for check
    string me hi dena padta hai syntax hai **/
    if(!this.isModified("password")) return next() 
    try {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    } catch (error) {
        console.log(error.message);
        next (error); // 
    }
    
})

// check password is correct or not 
// mongoose provide add methods also 

userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password, this.password)
}

// access token
userSchema.methods.generateAccessToken = function (){
    return JWT.sign(
        {
            _id: this.id,
            email: this.email,
            username: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        // expiry ke liye object lagta hai 
        {
            expiresIn:  process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

//Refresh token

userSchema.methods.generateRefreshToken = function (){
    return JWT.sign(
        {
            _id: this.id,
        },
        process.env.REFRESH_TOKEN_ACCESS,
        // expiry ke liye object lagta hai 
        {
            expiresIn:  process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User", userSchema)