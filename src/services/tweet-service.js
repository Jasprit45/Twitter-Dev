const {TweetRepository} = require('../repository/index');
const Hashtag = require('../models/hashtags');
const HashtagRepository = require('../repository/hashtag-repository');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository =  new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extract hashtags
        const tagss = tags.map((tag) => tag.substring(1));
        
        // console.log(tagss);
        const tweet = await this.tweetRepository.create(data);

        const tweetId = tweet.id;
        // console.log(tweetId);

        const existingHashtags = await Hashtag.find(
            {
                title:{$in: tagss},
            },
            {
                title:1,
                _id:0
            }
        );

        const existingContents = existingHashtags.map(
            h=>h.title
        );
        // console.log('---');
        // console.log(existingHashtags);
        // console.log('---');
        // console.log(existingContents);
        // console.log('---');

        const filteredHashtags = tagss.filter(
            hastag => !existingContents.includes(hastag)
        );

        const formattedHashtags = filteredHashtags.map(tag=> ({
            title:tag
        }));

        console.log(filteredHashtags);

        const res = await this.hashtagRepository.createMany(formattedHashtags);
        // console.log(`res :${res}`);

        const result = await this.hashtagRepository.addTweet(tweetId,tagss);
        // console.log(`result:${result}`);

        // tagss.map(async (tag) => (console.log(tag)));

        const tagsIds = await Promise.all(
            tagss.map(async (tag) => ({
                id: await this.hashtagRepository.getByTitle(tag)
            }))
        );

        // console.log(tagsIds);

        const response = await this.tweetRepository.insertHashtags(tweetId,tagsIds);
        // console.log(`response: ${response}`);



        //todo: create hashtags and add here
        /**
         * 1. bulkcreate in mangoose
         * 2. filter title of hashtag based on multiple tags
         * 3. how to add tweet id  inside all the hashtags
         */
        return response;
    }
}

module.exports = TweetService;

/*
    this is my #first #tweet. I am really #excited
    regex = #[a-zA-Z0-9_]+/g
 */
