import { Schema, model } from "mongoose";

let schema = new Schema({
  city: {type: String, required: true},
  country: {type: String, required: true},
  image: {type: String, required: true},
  // itineraries: [{type: Schema.Types.ObjectId, ref: "itineraries"}]
}, {
  timestamps: false
})

let City = model("cities", schema);

export default City;