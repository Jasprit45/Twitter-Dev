import express from 'express';
import bodyParser from 'body-parser';
import {Connect} from './config/database.js';
import TweetService from './services/tweet-service.js';
import apiRoutes from './routes/index.js'


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT = 3000;

app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    await Connect();
    console.log('Mongodb connected ');
    app.use('/api',apiRoutes);
    
});  