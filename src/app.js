import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true,limit: "16kb"})) // for receving url related data --- extended true means receving data allowed objeect nesting
app.use(express.static("public"))
app.use(cookieParser()) // cookie ralated data handled and work that receive in user broweser

 
export {app};