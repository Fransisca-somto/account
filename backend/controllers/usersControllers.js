import bcrypt from 'bcrypt'
import { getUser, createUser, modifyUser, deleteUser } from "../database/usersDatabase.js";

export const getUsers = async (req, res) => {
    const users = await getUser();
    console.log(users)
    res.status(200).send(users);
}

export const createUsers = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const hashedpassword = await bcrypt.hash(password, 11);
        const created = await createUser(username, hashedpassword);
        console.log(created)
        res.status(200).send({"Message":"User successfully created"})
    } catch (err) {
        console.log(err)
        res.send({"Message":"Process was unsuccessful"})
    }
}

export const updateUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const id = req.body.id;

    try {
        const hashedpassword = await bcrypt.hash(password, 11);
        await modifyUser(id, username, hashedpassword);
        console.log("user successfully modified")
        res.status(200).send({"Message": "User successfully modified"})
    } catch (err) {
        console.log(err)
    }
}

export const deleteUsers = async (req, res) => {
    await deleteUser(req.body.id);
    console.log("User successfully deleted")
    res.status(200).send({"Message":"User successfully deleted permanetly from the database"});
}

export const loginUser = async (req, res) => {
  const users = await getUser();
  try {
    const foundUser = users.find((user) => user.username == req.body.username);

    const isPassword = await bcrypt.compare(req.body.password, foundUser.password);
    console.log(isPassword)
    if (isPassword) {
      res.status(200).send({ Message: "User successfully Logged in" });
    } else {
      console.log("Incorrect password")
      res.status(500).send({"Message":"Incorrect password"})
    }
    console.log("user successfully logged in");
  } catch (err) {
    console.log(err);
  }
};

// import Users from "../model/users.js";

// export const handleNewUser = async (req, res) => {
//   const usernames = req.body.username;
//   const passwords = req.body.password;

//   try {
//     const duplicate = await Users.findOne({ username: usernames }).exec();

//     if (duplicate) {
//       console.log("User already exists");
//       res.status(403).send({ Message: "User already exists" });
//       return;
//     } else {
//       await Users.create({
//         username: usernames,
//         password: passwords,
//       });

//       console.log("New user created successfully");
//       res.status(200).send({ Message: "User created successfully" })
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const loginUser = async (req, res) => {
//   const usernames = req.body.username;
//   const passwords = req.body.password;

//   const isExist = await Users.findOne({
//     username: usernames,
//     password: passwords,
//   }).exec();

//   if (isExist) {
//     console.log("Userlogin successsfully");
//     res.status(200).send({ Message: "User Successfully logged in" });
//   } else {
//     console.log("Userlogin was unsuccesssful");
//     res.status(403).send({ Message: "User does not exist" });
//   }
// };

// // module.exports = { handleNewUser, loginUser }
