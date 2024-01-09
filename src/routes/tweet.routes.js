import { Router } from 'express';
import {
    createTweet,
    updateTweet,
    deleteTweet,
} from "../controllers/tweet.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router()

router.use(verifyJWT) // apply middleware to all routes

router.route("/").post(createTweet)
router.route("/:tweetId").patch(updateTweet).delete(deleteTweet)


export default router