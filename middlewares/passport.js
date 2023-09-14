import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from '../models/User.js'

const opt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.KEY
}

const fn = async (payload, next) => {
  try {
    const user = await User.findOne({ email: payload.email })
    if (!user) {
      throw new Error("No user exists with this email");
    }
    next(null, user)  //error=nulo, respuesta=user
  } catch (error) {
    next(error, null) //error=error, respuesta=nula
  }
}

export default passport.use(new Strategy(opt, fn));