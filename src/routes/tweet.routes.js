import { Router } from 'express';
import {
    createTweet,
    updateTweet 
} from "../controllers/tweet.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router()

router.use(verifyJWT) // apply middleware to all routes

router.route("/").post(createTweet)
router.route("/:tweetId").patch(updateTweet)


export default router