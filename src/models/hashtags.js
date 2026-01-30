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

// hashtagSchema.index(
//     {title:1},
//     {unique:true ,collation:{locale:'en' , strength:2}}
// );

// hashtagSchema.pre(/^find/, function() {
//     this.collation({locale: 'en', strength: 2});
// });

const Hashtag = mongoose.model('Hashtags',hashtagSchema);
module.exports = Hashtag;