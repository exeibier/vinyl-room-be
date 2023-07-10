import mongoose, { Schema } from "mongoose";

const VinylsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
    discount: {
        type: Number,
    },
    edition: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

const Vinyl = mongoose.model('Vinyl', VinylsSchema);
export default Vinyl;