import mongoose from 'mongoose';

export const Connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}
