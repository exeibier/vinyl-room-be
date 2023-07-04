import mongoose, {Schema} from "mongoose";

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type:Date,
        default: Date.now(),
    }

});

const User = mongoose.model('User', UsersSchema);
export default User;