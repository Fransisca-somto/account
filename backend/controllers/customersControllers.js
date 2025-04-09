import { listCustomers, addCustomers } from "../database/customersDatabase.js";
import { connectDB } from "../config/mysqlConnect.js";

const connection = await connectDB("Customers controller");

export const listAllCustomers = async (req, res) => {
  const userID = req.query.users_id;
  const customers = await listCustomers(userID);
  return res.json(customers);
};

export const addNewCustomers = async (req, res) => {
  const {
    users_id,
    cusName,
    cusCompany,
    address,
    phoneNumber,
    branch,
    date,
    creditLimit,
    openingBalance,
   } = req.body;


   const [customers_names] = await connection.query(`SELECT customers_name FROM testing.customers WHERE users_id = ?`,[users_id]);
   const foundUser = customers_names.find(customer => customer.customers_name === cusName);
   
   let isExist
   await customers_names.map(customer => customer.customers_name == cusName ? isExist = true: isExist = false);
   console.log(isExist)
   if (isExist) {
     const errMessage = "User already exists";
     console.log(errMessage)
     return res.status(403).send(errMessage)
   }
   
  try {
    await addCustomers(
        users_id,
      cusName,
      cusCompany,
      address,
      phoneNumber,
      branch,
      date,
      creditLimit,
      openingBalance
    );
    console.log("New user completely added")
    res.status(200).send({"Message":"New user successfully created"})
  } catch (err) {
    console.log(err);
    res.status(403).send({"Message":"Could't make the request"})
  }
};
