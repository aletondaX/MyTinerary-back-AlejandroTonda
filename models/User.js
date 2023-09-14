import { Schema, model } from "mongoose";

let schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  imgUrl: {type: String, default: "/def-user.png"},
  country: {type: String, required: true},
}, {
  timestamps: false
});

let User = model("users", schema);

export default User;