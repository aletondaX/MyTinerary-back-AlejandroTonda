import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const authController = {
  signUp: async (req, res, next) => {
    try {
      const exists = await User.findOne({ email: req.body.email });

      if (!exists) {
        const passwordHash = bcrypt.hashSync(req.body.password, 15);
        req.body.password = passwordHash;

        const newUser = await User.create(req.body);

        return res.status(201).json({
          success: true,
          userData: newUser,
          message: "Signed up successfully"
        })
      } else {
        return res.status(400).json({
          success: false,
          message: "Email already exists"
        })
      }

    } catch (error) {
      console.log(error);
    }
  },
  signIn: async (req, res, next) => {
    try {
      let { email: emailBody, password } = req.body

      const userInDB = await User.findOne({ email: emailBody })

      if (!userInDB) {
        res.status(400).json({
          success: false,
          message: "No user exists with this email"
        })
        throw new Error("No user exists with this email")
      }

      let passwordValidated = bcrypt.compareSync(password, userInDB.password)

      if (!passwordValidated) {
        res.status(400).json({
          success: false,
          message: "Incorrect email or password"
        })
        throw new Error("Incorrect email or password")
      }

      let { firstName, lastName, email, imgUrl } = userInDB
      const token = jwt.sign({ firstName, email, imgUrl }, process.env.KEY, { expiresIn: "1h" })
      return res.status(200).json({
        success: true,
        userData: { firstName, lastName, email, imgUrl },
        token: token,
        message: "Logged in successfully"
      })

    } catch (error) {
      console.log(error);
    }
  },
  loginWithToken: (req, res) => {
    // console.log(req.user);
    let { firstName, email, imgUrl } = req.user;
    res.status(200).json({
      success: true,
      userData: { firstName, email, imgUrl },
      message: "Logged in successfully"
    })
  }
}

export default authController;