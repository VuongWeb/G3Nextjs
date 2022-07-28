import mongoose,{ Schema } from 'mongoose'


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
    }
    // ,
    // category: {
    //     type: ObjectId,
    //     ref: "category"
    // }
}, {
    timestamps: true
})

export default mongoose.model('Product', Product)