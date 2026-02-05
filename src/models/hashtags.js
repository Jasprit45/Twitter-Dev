import mongoose from 'mongoose';


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

// hashtagSchema.pre('save',function(next) {
//     this.title = this.title.toLowerCase();
// })

 const Hashtag = mongoose.model('Hashtags',hashtagSchema);

 export default Hashtag;