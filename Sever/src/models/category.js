import mongoose, { Schema } from 'mongoose';


const Cate = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Category', Cate)