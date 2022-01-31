import express from "express";
import data from "../Data/data.js";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/utils.js";

const userRouter = express.Router();

userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await User.remove({});
      const createdUsers = await User.insertMany(data.users);
      res.send({ createdUsers });
    })
  );


  userRouter.post(
    '/login',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
  );

export default userRouter;