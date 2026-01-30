const express = require('express');
const Connect = require('./config/database');
const app = express();
const TweetService = require('./services/tweet-service');

const Comment = require('./models/comment');
const PORT = 3000;

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    await Connect();
    console.log('Mongodb connected ');
    const tweetservice = new TweetService();

    const tweet = await tweetservice.create({
        content: '#hello, my #first #tweet on #twitter today really #excited'
    });
    console.log(tweet);
});  