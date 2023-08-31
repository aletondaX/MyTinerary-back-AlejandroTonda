import { Schema, model } from "mongoose";

let schema = new Schema({
  city: {type: Schema.Types.ObjectId, ref:"cities", required: true},
  author: {type: String, required: true},
  photo: {type: String, required: true},
  price: {type: Number, required: true},
  duration: {type: Number, required: true},
  likes: {type: Number, default: 0},
  hashtags: {type: Array},
  comments: {type: Array}
}, {
  timestamps: false
})

let Itinerary = model("itineraries", schema);

export default Itinerary;