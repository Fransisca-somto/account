import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { createUsers, deleteUsers, getUsers, updateUser, loginUser } from "./controllers/UsersControllers.js";
import { addNewCustomers, listAllCustomers } from "./controllers/customersControllers.js";
import morgan from "morgan";
dotenv.config();

const app = express();
const PORT = 3500;

app.use(cors()); // Allow all requests
app.use(bodyParser.json()); // Parses JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded bodies
app.use(morgan('tiny'))

//users routing for login, register, editing details and deleting account 
app.get('/getuser', getUsers);
app.post('/register', createUsers);
app.delete('/deleteuser', deleteUsers);
app.put('/updateuser', updateUser);
app.post("/login", loginUser);

//Customers routing
app.get('/getcustomers', listAllCustomers);
app.post('/addcustomers', addNewCustomers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  // const oyaNa = async () => {
    
  //   const [results] = await connection.query("SELECT * FROM testing.users;");
  
  //   const [resultss] = await connection.query("SELECT * FROM testing.customers;");
  
  //   resultss.map(async result=>{
  //     if (result.customers_id == 10) {
  //       return
  //     } else {
  //       const [customers] = await connection.query(
  //         'INSERT INTO testing.customers (users_id, customers_id, customer_address, customers_phone, customers_email`) VALUES (?, ?, ?, ?, ?);',
  //         ['2', '10', '21, Adeolugbadehan street', '8069971549', 'fransiscasomto@gmail.com']
  //       );
  //     }
  //   })
  
  
  //   console.log(results);
  //   console.log(resultss);
  // };
  
  // oyaNa();