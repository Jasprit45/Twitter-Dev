import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async getByEmail(email) {
        try {
            const user = await User.findOne({email:email});
            return user;
        } catch (error) {
            console.log('Someting went wrong in user-repository');
            throw {error};
        }
    }
}

export default UserRepository;