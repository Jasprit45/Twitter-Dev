import express from 'express';
import bodyParser from 'body-parser';
import {Connect} from './config/database.js';
import apiRoutes from './routes/index.js'

import {UserRepository,TweetRepository} from './repository/index.js'
import LikeService from './services/like-service.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT = 3000;

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    await Connect();
    console.log('Mongodb connected ');
    app.use('/api',apiRoutes);

    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();
    
    // const tweet = await tweetRepo.getAll(0,10);
    // const user = await userRepo.create({
    //     email: 'a@b.com',
    //     password:'123456',
    //     name: 'Ab'
    // });

    // const users = await userRepo.getAll();

    // const likeService = new LikeService();
    // await likeService.toogleLike(tweet[0].id,'Tweet',users[0].id);
    
});  