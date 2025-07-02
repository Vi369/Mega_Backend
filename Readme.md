# vTubeBackend

This project marks a key milestone in my backend development journey. I've explored a variety of technologies and frameworks to build a full-featured video hosting platform enhanced with tweet-style interactions.  
Built with Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Bcrypt, Cloudinary, and more, VTube's backend is designed to be scalable, secure, and easy to extend.


## Features

## Video Hosting (like You-tube)

### User Authentication:
* Sign up and login functionalities for users.
* Secure user authentication using JWT and bcrypt.

### Video Management:

* Upload videos seamlessly.
* Like, dislike, and comment on videos.
* Advanced features like comment likes, dislikes, and replies.

### Subscription System:
* Allow users to subscribe and unsubscribe from channels.

## Tweet Functionalities
### Tweet Interaction:
* Users can post tweets, like, and dislike them.
* Comment on tweets, fostering engagement.

## Dashboard
* overview of channel and video management tools.

## Technologies Used
**Node.js & Express.js:**  The core of the backend development.
**MongoDB & Mongoose:** Database management for storing user data, videos, and tweets.
**JWT & Bcrypt:** Ensuring secure user authentication.
**Multer & Cloudinary:** Handling video uploads and storage.
**And Many More.**


## Configuration

Configure your application using the following environment variables:

- **PORT:** Set to your desired port number.
- **MONGODB_URI:** Set to your MongoDB connection URI.
- **CORS_ORIGIN:** Set to the allowed CORS origin (e.g., `*` for all or specify your frontend domain).
- **ACCESS_TOKEN_SECRET:** Set to a secure string for generating access tokens.
- **ACCESS_TOKEN_EXPIRY:** Set to the desired expiration time for access tokens (e.g., `1d` for one day).
- **REFRESH_TOKEN_SECRET:** Set to a secure string for generating refresh tokens.
- **REFRESH_TOKEN_EXPIRY:** Set to the desired expiration time for refresh tokens (e.g., `10d` for ten days).

### Session and Cookies

We use a combination of session and cookies. The `ACCESS_TOKEN` is not stored in the database, while the `REFRESH_TOKEN` is stored for a specific duration.

### Cloudinary Configuration

For Cloudinary integration:

- **CLOUDINARY_CLOUD_NAME:** Set to your Cloudinary cloud name.
- **CLOUDINARY_API_KEY:** Set to your Cloudinary API key.
- **CLOUDINARY_API_SECRET:** Set to your Cloudinary API secret.

Make sure to set these environment variables in your deployment environment or provide a `.env` file for local development.

## Postman Link
https://documenter.getpostman.com/view/31685048/2s9YsQ6oj4


I express my gratitude to Hitesh Sir for providing valuable insights and guidance throughout this learning journey. I've dedicated substantial time to reading, watching tutorials, and building upon the provided assignments to shape this project into a feature-rich backend.
Thank you for being part of my learning journey!
## License
This project is licensed under the MIT License - Chai Aur backend, @hiteshchoudhary and @vi369


