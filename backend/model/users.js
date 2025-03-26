import mongoose from "mongoose";
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles:{
        user: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Admmin: Number
    },
    password: {
        type: String,
        required: true
    }
})

const Users = mongoose.model('Users', employeeSchema);

export default Users