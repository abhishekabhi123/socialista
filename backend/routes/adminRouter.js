import express from "express";
// import User from "../models/userModel";
// import authCtrl from "../controllers/authCtrl";
// import { blockUser, getAllUsers } from "../controllers/userCtrl";
// import  } from "../middlewares/middleware";
const router = express.Router();

//get all users
router.get("/users", async (req, res) => {
  try {
    console.log("get all users");
    const user = await User.find({}, { password: 0 });
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/users/:id/block", async function (req, res) {
  console.log("asdf");
  let userDetails = await User.findById(req.params.id).lean();
  console.log(!userDetails.isBlocked);
  let data = await User.updateOne(
    { _id: Types.ObjectId(req.params.id) },
    { $set: { isBlocked: !userDetails.isBlocked } }
  );
  console.log(data);
  res.sendStatus(204);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (
    email !== process.env.ADMIN_EMAIL &&
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(400).json({ msg: "Password is incorrect" });
  }
  const access_token = jwt.sign({}, process.env.ADMIN_ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  res.status(200).json({ access_token });
});

export default router;
