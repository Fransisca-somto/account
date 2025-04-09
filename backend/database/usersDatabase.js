import { connectDB } from "../config/mysqlConnect.js";

const connection = await connectDB("Users Database");

export const getUser = async () => {
  const [users] = await connection.query(`SELECT * FROM testing.users`);
//   console.log("Users Successfully fetched");
  return users;
};

export const createUser = async (username, password) => {
  const [users] = await connection.query(`SELECT * FROM testing.users`);
  let id;
  let max = 0;
  users.forEach((user) => {
    user.users_id > max ? (max = user.users_id) : (max = max);
  });
  id = max + 1;

  const newuser = await connection.query(
    `INSERT INTO testing.users (users_id, username, password) VALUES (?, ?, ?)`,
    [id, username, password]
  );
//   console.log("New user successfully created");
};

export const modifyUser = async (id, username, password) => {
  const modifyuser = await connection.query(
    `UPDATE testing.users SET username = ?, password = ? WHERE users_id = ?;`, [username, password, id]
  );
//   console.log("User successfully modified");
};

export const deleteUser = async (id) => {
  await connection.query(`DELETE FROM testing.users WHERE users_id=?`, [id]);
};
