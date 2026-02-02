const Hashtag = require('../models/hashtags');

class HashtagRepository {

    async create(tag) {
        try {
            const response =  await Hashtag.create(tag);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
            try {
                const tag = await Hashtag.findById(id);
                return tag;
            } catch (error) {
                console.log(error);
            }
        }
    async destroy(id) {
            try {
                const tag = await Hashtag.findByIdAndDelete(id);
                return tag;
            } catch (error) {
                console.log(error);
            }
        }

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
            // console.log(data);
            const res = await Hashtag.find({
                title: data
            });
            if(!res) return null;
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = HashtagRepository;
