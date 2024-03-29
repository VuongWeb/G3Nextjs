import mongoose, { Schema } from 'mongoose'
const { ObjectId } = mongoose.Types;

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    categoryId: {
        type: ObjectId,
        ref: "Category"
    }
}, {
    timestamps: true
})

export default mongoose.model('Product', Product)