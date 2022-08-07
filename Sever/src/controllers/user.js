import User from './../models/user';

export const singup = async (req, res) => {
    const {email, name, password} = req.body
    try {
        const exitUser = await User.findOne({email}).exec();
        if(exitUser){
            return res.status(400).json({
                message : "email da ton tai"
            })
        }
        const user = await new User({email,name, password}).save()
        res.json({
            user:{
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
            res.status(400).json({error})
    }
}
export const singin = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            return res.status(404).json({
                message : "email da ton tai"
            })
        }
        if(!user.authenticate(password)){
            return res.status(400).json({
                message : "sai mat khau"
            })
        }
        res.json({
            user:{
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
            res.status(400).json({error})
    }
}