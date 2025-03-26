import Users from "../model/users.js";



export const handleNewUser = async (req, res) => {
  const usernames = req.body.username;
  const passwords = req.body.password;

  try {
    const duplicate = await Users.findOne({ username: usernames }).exec();

    if (duplicate) {
      console.log("User already exists");
      res.status(403).send({ Message: "User already exists" });
      return;
    } else {
      await Users.create({
        username: usernames,
        password: passwords,
      });

      console.log("New user created successfully");
      res.status(200).send({ Message: "User created successfully" })
    }
  } catch (err) {
    console.error(err);
  }
};

export const loginUser = async (req, res) => {
  const usernames = req.body.username;
  const passwords = req.body.password;

  const isExist = await Users.findOne({
    username: usernames,
    password: passwords,
  }).exec();

  if (isExist) {
    console.log("Userlogin successsfully");
    res.status(200).send({ Message: "User Successfully logged in" });
  } else {
    console.log("Userlogin was unsuccesssful");
    res.status(403).send({ Message: "User does not exist" });
  }
};

// module.exports = { handleNewUser, loginUser }
