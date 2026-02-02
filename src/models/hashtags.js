const mongoose = require('mongoose');


const hashtagSchema = new mongoose.Schema( {
    title: {
        type: String,
        required:true,
        unique:true,
        trim:true, //remove white spaces from beginning and end of the string before saving to MongoDB
    },
    tweets: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Tweet'
        }
    ]

}, {timestamps:true});

const Hashtag = mongoose.model('Hashtags',hashtagSchema);
module.exports = Hashtag;