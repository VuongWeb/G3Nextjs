import Category from "../models/category"
import Products from "../models/products";

export const read = async (req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec();
        const productscate = await Products.find({ category }).select('-category').exec();
        console.log(productscate);
        res.json({
            category, productscate
        });
    } catch (error) {
        console.log(error);
    }
}

export const listcate = async (req, res) => {
    try {
        const categories = await Category.find().exec();
        res.json({
            categories
        })
    } catch (error) {
        res.status(400).json({
            message: "K lấy được danh mục sản phẩm"
        })
    }
}
export const addcate = async (req, res) => {
    try {
        const categories = await new Category(req.body).save();
        res.json({
            categories
        })
    } catch (error) {
        res.status(400).json({
            message: "K thêm được danh mục"
        })
    }
}
export const removeCate = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(category)
    } catch (error) {
        res.status(400).json({
            message: "Không xóa được danh muc!"
        })
    }
}
export const updateCate = async (req, res) => {
    const condition = { _id: req.params.id };
    const doc = req.body;
    // tra ve 1 danh sach khi minh da cap nhat
    const option = { new: true };
    try {
        const category = await Category.findOneAndUpdate(condition, doc, option);
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được danh muc"
        })
    }
}