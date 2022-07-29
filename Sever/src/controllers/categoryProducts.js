import Category from "../models/category"
import Products from "../models/products";

export const read = async (req, res) => {
    const condition = {_id:res.params._id}
    try {
        const categories = await Category.findOne(condition).exec();
        const products = await Products.find({categories}).select('-category').exec();
        res.json({
            categories,products
        })
    } catch (error) {
        res.status(400).json({
            message:"K lấy được sản phẩm"
        })
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
            message:"K lấy được danh mục sản phẩm"
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
            message:"K thêm được danh mục"
        })
    }
}