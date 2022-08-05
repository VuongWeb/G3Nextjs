import News from "../models/news"

export const list = async (req, res) => {
    try {
        const news = await News.find().limit().exec()
        res.json(news)
    } catch (error) {
        res.status(400).json({
            message: "K lấy được bài viết!"
        })
    }
}
export const create = async (req, res) => {
    try {
        const neww = await new News(req.body).save();
        res.json(neww)
    } catch (error) {
        res.status(400).json({
            message: "Thêm thành công!"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const neww = await News.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(neww)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được!"
        })
    }
}
export const update = async (req, res) => {

    const condition = { _id: req.params.id };
    const update = req.body;
    const optional = {
        new: true
    };
    try {
        const neww = await News.findOneAndUpdate(condition,update,optional).exec();
        res.json(neww)
    } catch (error) {
        res.status(400).json({
            message:"Không thể cập nhật"
        })
    }
}

export const get = async (req, res) => {
    try {
        const neww = await News.findOne({ _id: req.params.id }).exec();
        res.json(neww)
    } catch (error) {
        res.status(400).json({
            message: "Lấy không thành công!"
        })
    }
}