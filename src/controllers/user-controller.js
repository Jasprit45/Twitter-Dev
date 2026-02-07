import UserService from "../services/user-service.js";

const  userservice = new UserService();

export const signup = async(req,res) => {
    try {
        const response = await userservice.signup({
            email:req.body.email,
            password:req.body.password,
            name: req.body.name
        });
        console.log(response);

        return res.status(201).json({
            success: true,
            message: "Successfully signup",
            data: response,
            error: {},
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong in signip",
            data: {},
            error: error,
        });
    }
}