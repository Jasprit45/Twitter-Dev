import LikeService from "../services/like-service.js";

const likeService = new LikeService();
export const toggleLike = async (req,res) =>{
    try {
        const like = await likeService.toogleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(201).json({
            success: true,
            message: "Successfully toggled like",
            data: {like},
            error: {},
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong in toggling like",
            data: {},
            error: error,
        })
    }
}