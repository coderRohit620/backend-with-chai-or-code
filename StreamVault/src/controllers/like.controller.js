import mongoose, {isValidObjectId} from "mongoose"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const toggleVideoLike = asyncHandler(async (req, res) => {
    const {videoId} = req.params

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video Id")
    }

    const userId = req.user?._id

    const existingLike = await Like.findOneAndDelete({
        video: videoId,
        likedBy: userId
    })

    if (existingLike) {
        return res
            .status(200)
            .json(new ApiResponse(200, {liked: false}, "Video unliked successfully"))
    }

    await Like.create({
        video: videoId,
        likedBy: userId
    })

    return res
        .status(200)
        .json(new ApiResponse(200, {liked: true}, "Video liked successfully"))
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    //TODO: toggle like on comment

})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const {tweetId} = req.params
    //TODO: toggle like on tweet
}
)

const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}
