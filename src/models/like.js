import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
    onModel:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        enum:['Tweet','Comment']
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:'onModel',
        required:true
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
    
} , {timestamps:true});

const Like = mongoose.model('Like',likeSchema);

export default Like;