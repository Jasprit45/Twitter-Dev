const mongoose  = require('mongoose');

const Connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter_Dev');

}

module.exports = Connect;