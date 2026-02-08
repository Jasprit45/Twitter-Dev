import express from 'express';
import bodyParser from 'body-parser';
import {Connect} from './config/database.js';
import apiRoutes from './routes/index.js'
import passport from 'passport';
import {UserRepository,TweetRepository} from './repository/index.js'
import LikeService from './services/like-service.js';
import {passportAuth} from './config/jwt-middleware.js'
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
passportAuth(passport);
const PORT = 3000;

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    await Connect();
    console.log('Mongodb connected ');
    app.use('/api',apiRoutes);

    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();
    
});  