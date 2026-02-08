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
            const user = await this.getUserByEmail(email);
            console.log(user);
            if(!user){
                throw {
                    message: "no user found",
                };
            }
            if(!user.comparePassword(password)) {
                throw {
                    message: "incorrect password",
                };
            }

            const token = user.genJWT();
            return token;

        } catch (error) {
            console.log("Something went wrong in signup of user service layer")
            throw error;
        }
    }

    async getUserByEmail(email){
        try {
            const user = await this.userRepository.findBy({email:email});
            return user;
        } catch (error) {
            console.log("Something went wrong user service layer")
            throw error;
        }
    } 

}

export default UserService;