const {TweetRepository,HashtagRepository} = require('../repository/index');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository =  new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // this regex extract hashtags
        
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

        const idOfAllTags =  await this.hashtagRepository.getByTitle(tags);

        idOfAllTags.forEach((tag)=> {
            tweet.hashtags.push(tag.id);
        });
        tweet.save();
        return tweet;
    }
}

module.exports = TweetService;

/*
    this is my #first #tweet. I am really #excited
    regex = #[a-zA-Z0-9_]+/g
 */
