import mongoose, { Schema } from 'mongoose'


const New = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
    },
}, {
    timestamps: true
})

export default mongoose.model('New', New)