import mongoose from "mongoose";
import isOnline from "is-online";

const connected = await isOnline();
let Users;

if (connected) {
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
    
    Users = mongoose.model('Users', employeeSchema);
} else {
    
}

export default Users