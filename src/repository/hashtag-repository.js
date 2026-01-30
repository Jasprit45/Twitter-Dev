const Hashtag = require('../models/hashtags');

class HashtagRepository {

    async createMany(data) {
        try {
            // console.log(data);
            const response =  await Hashtag.insertMany(data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async addTweet(tweetId,data) {
        try {
            const response = await Hashtag.updateMany(
                {title: {$in:data}},
                {$push: {tweets:tweetId}}
            ).collation({locale:'en',strength:2});
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async getByTitle(data) {
        try {
            const res = await Hashtag.findOne({title:data});
            if(!res) return null;
            return res.id;
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = HashtagRepository;
