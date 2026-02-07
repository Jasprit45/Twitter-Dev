import TweetService  from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req,res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfully created a tweet",
            data: response,
            error: {},
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong in creating a tweet",
            data: {},
            error: error,
        });
    }
}

export const getTweet = async (req,res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(201).json({
            success: true,
            message: "Successfully fetched a tweet",
            data: response,
            error: {},
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong in getting a tweet",
            data: {},
            error: error,
        });
    }
}