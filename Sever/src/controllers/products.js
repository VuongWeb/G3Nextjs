import Products from "../models/products"

export const list = async (req, res) => {
    try {
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
        const product = await Products.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được sản phẩm!"
        })
    }
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id};
    const doc = req.body;
    // tra ve 1 danh sach khi minh da cap nhat
    const option = { new: true};
    try {
        const product = await Products.findOneAndUpdate(condition, doc, option);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const getitem = async (req, res) => {
    try {
        const product = await Products.findOne({ _id: req.params.id }).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Lấy sản phẩm không thành công!"
        })
    }
}