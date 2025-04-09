import { connectDB } from "../config/mysqlConnect.js";

const connection = await connectDB("Customers Database");

export const listCustomers = async (users_id) => {
  const [customers_list] = await connection.query(
    `SELECT * FROM testing.customers WHERE users_id = ?`, [users_id]
  );
  console.log("Customers list succesfully fetched");
  return customers_list;
};

export const addCustomers = async (
  users_id,
  cusName,
  cusCompany,
  address,
  phoneNumber,
  branch,
  date,
  creditLimit,
  openingBalance
) => {
  const user_id = users_id;
  const [customerID] = await connection.query(
    `SELECT customers_id FROM testing.customers WHERE users_id = ?`,
    [users_id]
  );

  let cusID = 0;

  function getID() {
    if (!customerID || customerID.length == 0) {
        console.log("No entry in the database")
        cusID = 0
        return cusID
    }

    customerID.map(customer => customer.customers_id > cusID ? cusID = customer.customers_id : cusID = cusID);
    return cusID + 1
  }

  cusID = await getID();

  await connection.query(
    `INSERT INTO testing.customers (users_id, customers_id, customers_name, customers_company, customers_address, customers_phone_number, customers_branch, customers_opening_date, customers_credit_limit, customers_opening_balance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      user_id,
      cusID,
      cusName,
      cusCompany,
      address,
      phoneNumber,
      branch,
      date,
      creditLimit,
      openingBalance,
    ]
  );
};
