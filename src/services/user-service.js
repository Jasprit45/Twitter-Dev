import {UserRepository} from '../repository/index.js'

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signup(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in signup of user service layer")
            throw error;
        }
    }

    async signin(email,password){
        try {
            const user = await this.userRepository.getByEmail(email);

            //match password
            //create a token for user

            return user;
        } catch (error) {
            console.log("Something went wrong in signup of user service layer")
            throw error;
        }
    }

}

export default UserService;