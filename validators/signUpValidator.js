import joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
  min: 6,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1
};

export const signUpSchema = joi.object({
  firstName: joi.string().required().min(3).messages({
    "any.required": "First name is required",
    "string.empty": "First name cannot be empty",
    "string.base": "First name should contain only letters",
    "string.min": "First name should be at least 3 characters long"
  }),
  lastName: joi.string().required().min(3).messages({
    "any.required": "Last name is required",
    "string.empty": "Last name cannot be empty",
    "string.base": "Last name should contain only letters",
    "string.min": "Last name should be at least 3 characters long"
  }),
  email: joi.string().email().required().messages({
    "any.required": "Email is required",
    "string.empty": "Email cannot be empty",
    "string.email": "Email must be a valid email"
  }),
  password: joiPwd(complexityOptions).messages({
    "any.required": "Password is required",
    "string.empty": "Password cannot be empty",
    "passwordComplexity.tooShort": "Password should be at least 6 characters long",
    "passwordComplexity.tooLong": "Password should not be longer than 30 characters",
    "passwordComplexity.lowercase": "Password should contain at least 1 lower-cased letter",
    "passwordComplexity.uppercase": "Password should contain at least 1 upper-cased letter",
    "passwordComplexity.numeric": "Password should contain at least 1 number",
  }),
  imgUrl: joi.string().uri().messages({
    "string.uri": "Image URL must be a valid URL"
  }),
  country: joi.string().required().messages({
    "any.required": "Country is required",
    "string.empty": "Country cannot be empty"
  })
});