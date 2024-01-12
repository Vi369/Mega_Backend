import mongoose, { isValidObjectId } from "mongoose";
import { deleteOnCloudinary, uploadOnCloudinaary } from "../utils/services/cloudinary.service.js"
import { Video } from "../models/video.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";

// publish video
const publishAVideo = asyncHandler(async (req, res) => {
    const { title , description, isPublished = true } = req.body

    if(!title || title?.trim()===""){
        throw new ApiError(400, "Title content is required")
    }
    if(!description || description?.trim()===""){
        throw new ApiError(400, "description content is required")
    }
    // local path 
    const videoFileLocalPath = req.files?.videoFile?.[0].path
    const thumbnailFileLocalPath = req.files?.thumbnail?.[0].path

    if(!videoFileLocalPath){
        throw new ApiError(400, "video file missing !!")
    }

    // upload on cloudinary 
    const videoFile = await uploadOnCloudinaary(videoFileLocalPath)
    const thumbnail = await uploadOnCloudinaary(thumbnailFileLocalPath)

    if(!videoFile){
        throw new ApiError(500, "something went wrong while uploading video file on cloudinary")
    }
    
    // strore in the database 
    const video = Video.create({
        videoFile:{
            public_id: videoFile?.public_id,
            url: videoFile?.url
        },
        thumbnail:{
            public_id: thumbnail?.public_id,
            url: thumbnail?.url
        },
        title,
        description,
        isPublished,
        videoOwner: req.user._id,
        duration: videoFile?.duration
    })

    if(!video){
        throw new ApiError(500, "something went wrong while store the video in database")
    }

    // retern the response 
    return res.status(201).json(
        new ApiResponse(200, video, "video uploaded successfully!!")
    );
})

//  update video details
const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    const { title, description } = req.body
    const thumbnailFile = req.file?.path

    if(!isValidObjectId(videoId)){
        throw new ApiError(400, "This video id is not valid")
    } 
    // if any feild not provide
    if(
        !(thumbnailFile || !(!title || title?.trim() === "") || !(!description || description?.trim() === ""))
    ){
        throw new ApiError(400, "update fields are required")
    }

    // find video 
    const previousVideo = await Video.findOne(
        {
            _id: videoId
        }
    )
    if(!previousVideo){
        throw new ApiError(404, "video not found")
    }

    let updateFields = {
        $set:{
            title,
            description,
        }
    }

    // if thumbnail provided delete the previous one and upload new on 
    let thumbnailUploadOnCloudinary;
    if(thumbnailFile){
        await deleteOnCloudinary(previousVideo.thumbnail?.public_id)

        // upload new one 
         thumbnailUploadOnCloudinary = await uploadOnCloudinaary(thumbnailFileLocalPath);

        if(!thumbnailUploadOnCloudinary){
            throw new ApiError(500, "something went wrong while updating thumbnail on cloudinary !!")
        }

        updateFields.$set = {
            public_id: thumbnailUploadOnCloudinary.public_id,
            url: thumbnailUploadOnCloudinary.url
        }
    }

    const updatedVideoDetails = await Video.findByIdAndUpdate(
        videoId,
        updateFields,
        {
            new: true
        }
    )

    if(!updatedVideoDetails){
        throw new ApiError(500, "something went wrong while updating video details");
    }

    //retrun responce
    return res.status(200).json(new ApiResponse(
        200,
        { updatedVideoDetails },
        "Video updated successfully!"
    ));

})

// get video by id
const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: get video by id
})

// get all video 
const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all videos based on query, sort, pagination
})


// delete video
const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: delete video
})

// toggle publish status
const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})

export {
    publishAVideo,
    updateVideo,
    getVideoById,
    deleteVideo,
    togglePublishStatus,
    getAllVideos
}