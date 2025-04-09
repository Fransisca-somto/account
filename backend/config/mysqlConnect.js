import mysql from 'mysql2/promise';
import dotenv from "dotenv"

dotenv.config();

export const connectDB = async (name) => {
    let con;
    try {
        con = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            password: process.env.DATABASE_PASSWORD, 
            user: process.env.DATABASE_USER,
            database: process.env.DATABASE_DATABASE, 
        });
    } catch (err) {
        console.log("Not connected");
        console.log(err)
    }
    console.log(`${name} connected`);
    return con;
}