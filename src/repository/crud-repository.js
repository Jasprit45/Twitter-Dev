
class CrudRepository  {
    constructor(model) {
        super();
        this.model = model;
    }

    async create(data) {
        try {
            const res = await this.model.create(data);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id) {
        try {
            const res = await this.model.findById(id);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    
    async destroy(id) {
        try {
            const res = await this.model.findByIdAndDelete(id);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset,limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
}

export default TweetRepository;