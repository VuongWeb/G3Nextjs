import User from "../models/auth";

export const Signup = async(req, res) => {

    const { name, email, password } = req.body;
    try {
        const exitUser = await User.findOne({ email }).exec();
        if (exitUser) {

            res.json({
                message: "email da ton tai"
            })
        };
        const user = await new User({ email, name, password }).save();
        res.json({
            signup: {
                id: user.id,
                email: user.email,
                name: user.name,
                password: user.password
            }
        })
    } catch (error) {

    }
}

export const Signin = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        res.json({

            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }


        })
    } catch (error) {

    }

}