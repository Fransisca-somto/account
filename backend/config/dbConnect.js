import mongoose from "mongoose";

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUriParser: true
        });
    } catch (err) {
        console.error(err)
    }
}

module.exports = dbConnect;