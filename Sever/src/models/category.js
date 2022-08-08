import mongoose, { Schema } from 'mongoose';


const Category = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Category', Category)