import mysql from 'mysql2/promise';
import 'dotenv/config'

export const connectDB = async () => {
    try {
        const con = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            password: process.env.DATABASE_PASSWORD, 
            user: process.env.DATABASE_USER,
            database: process.env.DATABASE_DATABASE, 
        });
        console.log("connected");
        return con;
    } catch (err) {
        console.log("Not connected");
        console.log(err)
    }

}