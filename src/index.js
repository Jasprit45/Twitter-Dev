const express = require('express');
const Connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const PORT = 3000;

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    await Connect();
    console.log('Mongodb connected ');
    const tweetRepo = new TweetRepository();

    const tweet = await tweetRepo.getALl(0,4);
    console.log(tweet);
});  