import joi from "joi";
import joiPwd from "joi-password-complexity";

// const complexityOptions = {
//   min: 6,
//   max: 30,
//   lowerCase: 1,
//   upperCase: 1,
//   numeric: 1
// };

export const signInSchema = joi.object({
  email: joi.string().email().required().messages({
    "any.required": "Email is required",
    "string.email": "Email must be a valid email"
  }),
  password: joi.string().messages({
    "any.required": "Password is required"
  })
})