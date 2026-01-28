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
    // const tweet = await Tweet.create({
    //     content: 'Third tweet',
    //     userEmail: 'a@b.com'
    // });

    // const tweets = await Tweet.find({userEmail: 'a@b.com'});
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create( {content: 'my tweet'} );
    // console.log(tweet);
    // tweet.comments.push({content: 'first comment'});
    // await tweet.save();

    // const tweet  = await tweetRepo.create({content: "Tweet with comment schema"});
    // const comment = await Comment.create({content: 'new comment'});
    // console.log(tweet);
    // tweet.comments.push(comment);
    // await tweet.save();

    const tweet = await tweetRepo.getWithComments('697a4d5e186da8788a747f5c');
    console.log(tweet);
});  