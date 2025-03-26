import dotenv from "dotenv";
import axios from "axios";
import bodyParser from "body-parser";
import morgan from "morgan";
import express from "express";
import mongoose from "mongoose";
import isOnline from 'is-online'
import {
  handleNewUser,
  loginUser,
} from "./controllers/usersController.js";
import cors from "cors";

const app = express();
const PORT = 3500;

app.use(cors()); // Allow all requests
app.use(bodyParser.json()); // Parses JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded bodies

dotenv.config();
const connectDB = async () => {
  try {
    // await isOnline();
    await mongoose.connect(process.env.DATABASE_URI, {});
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit the process if connection fails
  }
};

const connected = await isOnline();

while (connected) {
  connectDB();
}


app.post("/login", loginUser);
app.post("/register", handleNewUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
});