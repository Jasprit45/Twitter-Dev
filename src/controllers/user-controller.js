import UserService from "../services/user-service.js";

const  userservice = new UserService();

export const signup = async(req,res) => {
    try {
        const response = await userservice.signup({
            email:req.body.email,
            password:req.body.password,
            name: req.body.name
        });
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

export const login = async(req,res) => {
    try {
        const token = await userservice.signin(
            req.body.email,
            req.body.password
        );
        return res.status(200).json({
            success: true,
            message: "Successfully login",
            data: token,
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong in login",
            data: {},
            error: error,
        });
    }
}
