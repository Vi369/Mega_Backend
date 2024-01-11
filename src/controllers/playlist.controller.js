import mongoose, {isValidObjectId} from "mongoose"
import {Playlist} from "../models/playlist.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

// create playlist
const createPlaylist = asyncHandler(async (req, res) => {
    const {name, description} = req.body

    if((!name || name?.trim()==="") || (!description || description?.trim()==="")){
        throw new ApiError(400, "name and deccription both are required")
    }

    // creating playlist 
    const playlist = await Playlist.create({
        name,
        description,
        owner: req.user._id
    })

    if(!playlist){
        throw new ApiError(500, "something went wrong while creating playlist")
    }

    // return responce
    return res.status(201).json(
        new ApiResponse(200, playlist, "playlist created successfully!!")
    );
})

// delete playlist
const deletePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.params

    if(!isValidObjectId(playlistId)){
        throw new ApiError(400, "This playlist id is not valid")
    }

    const playlist = await Playlist.findById(playlistId)

    if (!playlist) {
        throw new ApiError(404, "no playlist found!");
    }

    if (playlist.owner.toString() !== req.user._id.toString()) {
        throw new ApiError(403, "You don't have permission to delete this playlist!");
    }

    const deletePlaylist = await Playlist.deleteOne(req.user._id)

    if(!deletePlaylist){
        throw new ApiError(500, "something went wrong while deleting playlist")
    }

    // return responce
    return res.status(201).json(
        new ApiResponse(200, deletePlaylist, "playlist deleted successfully!!"))
})

// update playlist
const updatePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    const {NewName, NewDescription} = req.body
    
    if(!isValidObjectId(playlistId)){
        throw new ApiError(400, "This playlist id is not valid")
    }
    // if any one is provided
    if ((!NewName || NewName?.trim() === "") && (!NewDescription || NewDescription?.trim() === "")) {
        throw new ApiError(400, "Either name or description is required");
    } else {
        const playlist = await Playlist.findById(tweetId)

        if (playlist.owner.toString() !== req.user._id.toString()) {
            throw new ApiError(403, "You don't have permission to update this playlist!");
        }

        const updatePlaylist = await Playlist.findByIdAndUpdate(
            playlistId,
            {
                $set:{
                    name: NewName,
                    description: NewDescription
                }
            },
            {
                new: true
            }
        )

        if(!updatePlaylist){
            throw new ApiError(500, "something went wrong while updating playlist!!")
        }

        // return responce
        return res.status(201).json(
        new ApiResponse(200, updatePlaylist, "playlist updated successfully!!"))
    }
})


const getUserPlaylists = asyncHandler(async (req, res) => {
    const {userId} = req.params
    //TODO: get user playlists
})

const getPlaylistById = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    //TODO: get playlist by id
})

const addVideoToPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
})

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
    // TODO: remove video from playlist

})



export {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}