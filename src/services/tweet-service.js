import {TweetRepository,HashtagRepository} from '../repository/index.js';

 class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository =  new HashtagRepository();
    }

    async create(data) {
        try {
            const content = data.content;
            const tags = content.match(/#[a-zA-Z0-9_]+/g);
            if(!tags) {
                const tweet = await this.tweetRepository.create(data);
                return tweet;
            } else tags = tags.map((tag) => tag.substring(1).toLowerCase()); // this regex extract hashtags
            
            const tweet = await this.tweetRepository.create(data);

            let alreadyPresentTags = await this.hashtagRepository.getByTitle(tags);
            let titleOfPresentTags = alreadyPresentTags.map((tag)=> tag.title);

            let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
            newTags = newTags.map(tag=> {
                return {title:tag,tweets: [tweet.id]}
            });
            await this.hashtagRepository.createMany(newTags);

            alreadyPresentTags.forEach((tag)=> {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;
        } catch (error) {
            console.log('Something went wrong in getting a tweet in tweet repository');
            throw error;
        }

    }

    async get(tweetId) {
        try {
            const tweet = await this.tweetRepository.getWithComments(tweetId);
            return tweet;
        } catch (error) {
            console.log('Something went wrong in getting a tweet in tweet repository');
            throw error;
        }

    }
}

export default TweetService;

// module.exports = TweetService;

/*
    this is my #first #tweet. I am really #excited
    regex = #[a-zA-Z0-9_]+/g
 */
