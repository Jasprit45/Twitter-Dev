const Tweet = require('../models/tweet');

class TweetRepository  {
    constructor() {
        
    }

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async insertHashtags(tweetId,data) {
        try {
            const tweet = await Tweet.findById(tweetId);
            tweet.hashtags = data.map(item=>item.id);
            await tweet.save();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async getALl(offset,limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = TweetRepository;