class CrudRepository  {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const res = await this.model.create(data);
            return res;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            console.log(error);
        }
    }
    async get(id) {
        try {
            const res = await this.model.findById(id);
            return res;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            console.log(error);
        }
    }
    
    async destroy(id) {
        try {
            const res = await this.model.findByIdAndDelete(id);
            return res;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            console.log(error);
        }
    }

    async update(id,data){
        try {
            const res = await this.model.findByIdAndUpdate(id,data, {new:true});
            return res;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            console.log(error);
        }
    }

    async getAll() {
        try {
            const res = await this.model.find();
            return res;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            console.log(error);
        }
    }
    
}

export default CrudRepository;