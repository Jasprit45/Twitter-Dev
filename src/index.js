import express from 'express';
import {Connect} from './config/database.js';
import TweetService from './services/tweet-service.js';
const app = express();

import {TweetRepository,HashtagRepository} from './repository/index.js';

import Comment from './models/comment.js';


const PORT = 3000;

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    await Connect();
    console.log('Mongodb connected ');
    const tweetservice = new TweetService();

    const tweet = await tweetservice.create({
        content: '#Bro,#lets #START ',
    });
    // const repo = new HashtagRepository();
    // const data = ['hi','hello','new','love'];
    // const tweet = await repo.getByTitle(data); 
    console.log(tweet);
});  