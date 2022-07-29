import Category from "../models/category"
import Products from "../models/products";

export const read = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        const products = await Products.find({category}).select('-category').exec();
        res.json({
            category, products
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