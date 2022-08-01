import Products from "../models/products"

export const list = async (req, res) => {
    try {
        console.log(res.body);
        const products = await Products.find().limit().exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "K lấy được sản phẩm!"
        })
    }
}
export const create = async (req, res) => {
    try {
        const product = await new Products(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm thành công!"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được sản phẩm!"
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
        const product = await Products.findOneAndUpdate(condition,update,optional).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message:"Không thể cập nhật sản phẩm"
        })
    }
}

export const get = async (req, res) => {
    try {
        const product = await Products.findOne({ _id: req.params.id }).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Lấy sản phẩm không thành công!"
        })
    }
}