const express = require('express');
const Connect = require('./config/database');
const app = express();
const TweetService = require('./services/tweet-service');

const {TweetRepository,HashtagRepository} = require('./repository/index');


const Comment = require('./models/comment');
const PORT = 3000;

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    await Connect();
    console.log('Mongodb connected ');
    const tweetservice = new TweetService();

    const tweet = await tweetservice.create({
        content: 'hi, i am #new hear #excited to get #started',
    });
    // const repo = new HashtagRepository();
    // const data = ['hi','hello','new','love'];
    // const tweet = await repo.getByTitle(data); 
    console.log(tweet);
});  