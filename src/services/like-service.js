import {LikeRepository,TweetRepository} from '../repository/index.js';

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toogleLike(modelId,modelType,userId) { //api/v1/likes/toogle?id=modelid&type=Tweet
        try {
            if(modelType=='Tweet'){
                var likeable = await this.tweetRepository.find(modelId);
            }
            else if(modelType=='Comment'){
                //todo
            }
            else {
                throw new Error('unknown model type');
            }

            const exist = await this.likeRepository.findByUserAndLikeable({
                user: userId,
                onModel:modelType,
                likeable:modelId,
            });

            if(exist){
                likeable.likes.pull(exist.id);
                await likeable.save();
                await this.likeRepository.destroy(exist.id);
                var isLiked = false;
            } else {
                const newLike = await this.likeRepository.create({
                    user:userId,
                    onModel:modelType,
                    likeable:modelId
                });
                likeable.likes.push(newLike);
                await likeable.save();
                var isLiked = true;
            }
            return isLiked;


        } catch (error) {
            console.log("Something went wrong in like-service layer");
        }
    }
}

export default LikeService;