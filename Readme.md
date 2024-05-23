# Mega Backend ( Vtube )
This project marks a significant milestone in my backend development journey, where I've delved into various technologies and frameworks to build a comprehensive video hosting website enriched with tweet functionalities. Using Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Bcrypt, Cloudinary, and many more, i have create a robust backend for a feature-rich video hosting website with tweet functionalities.

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
## model link 
https://app.eraser.io/workspace/pNGSqTCXzR2H5rJz9DOV?origin=share
## Learning Journey
This project reflects my commitment to learning, inspired by the teachings of Hitesh Choudhary. I diligently followed his "Chai aur Code" backend playlist, completing assignments that covered fundamental and advanced functionalities. The project incorporates best practices such as JWT, bcrypt, access tokens, and refresh tokens.
## Contributing
We welcome contributions! If you'd like to contribute to [ Vtube (mega backend )], please follow these guidelines:
- **Bug Reports:** Open an issue with a clear description and steps to reproduce.
- **Feature Requests:** Submit an issue with detailed specifications.
- **Pull Requests:** Fork the repo, create a new branch, make changes, and submit a pull request.

    Thank you for contributing!
## Future Developments 
This is not the end; I plan to continually enhance this project with additional functionalities based on user feedback and evolving needs. Moreover, if time permits, I aspire to delve into frontend development to create a seamless user experience.

I express my gratitude to Hitesh Sir for providing valuable insights and guidance throughout this learning journey. I've dedicated substantial time to reading, watching tutorials, and building upon the provided assignments to shape this project into a feature-rich backend.

Thank you for being part of my learning journey!
## License

This project is licensed under the MIT License - Chai Aur backend, @hiteshchoudhary and @vi369


