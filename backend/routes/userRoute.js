import express, { json } from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

const UserRouter = express.Router();

//*Register route
UserRouter.post("/register", async (req, res) => {
  const NewUser = new User({
    username: req.body.username,
    userauth: req.body.userauth,
    password: bcrypt.hashSync(req.body.password),
    imageprofile: req.body.imageprofile || "./assets/images/user/user.png",
    imagecover: req.body.imagecover || "./assets/images/user/user.png",
  });
  const user = await NewUser.save();
  res.send({
    _id: user._id,
    username: user.username,
    userauth: user.userauth,
    imageprofile: user.imageprofile,
    imagecover: user.imagecover,
    followings: user.followings,
    followers: user.followers,
  });
});

//*Login
UserRouter.post("/login", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ userauth: req.body.userauth });

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        username: user.username,
        userauth: user.userauth,
        imageprofile: user.imageprofile,
        imagecover: user.imagecover,
        followings: user.followings,
        followers: user.followers,
      });
    }
  }
});

//*Get user

UserRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(json.error);
  }
});

//*Get friends
UserRouter.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, imageprofile } = friend;
      friendList.push({ _id, username, imageprofile });
    });
    res.status(200).json(friendList);
  } catch (error) {
    res.status(500).json(error);
  }
});

//*Get all users
UserRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

//*Follow user
UserRouter.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("User has been followed");
      } else {
        res.status(403).json("You already follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can't follow yourself");
  }
});

//* Unfollow user

UserRouter.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("User has been unfollowed");
      } else {
        res.status(403).json("You don't follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can't unfollow yourself");
  }
});

export default UserRouter;
