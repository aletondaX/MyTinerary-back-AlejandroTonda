import Itinerary from "../models/Itinerary.js";
import City from "../models/City.js";

const itinerariesController = {
  getItineraries: async (req, res, next) => {
    let itineraries;
    try {
      itineraries = await Itinerary.find().populate({path: "city", select: "city country"});
      
      res.json({
        success: true,
        response: itineraries
      })
    } catch (error) {
      console.log(error);
    }
  },
  getItinerary: async (req, res, next) => {
    const { id } = req.params;
    let itinerary;
    try {
      itinerary = await Itinerary.findById(id).populate({path: "city", select: "city country"});
  
      res.json({
        success: true,
        response: itinerary
      })
    } catch (error) {
      console.log(error);
    }
  },
  getItinerariesByCity: async (req, res, next) => {
    const { cityId } = req.params;
    let itineraries;
    try {
      itineraries = await Itinerary.find({city: cityId}).populate({path: "city", select: "city country"});
      
      res.json({
        success: true,
        response: itineraries
      })
    } catch (error) {
      console.log(error);
    }
  },
  createItinerary: async (req, res, next) => {
    try {
      let city = await City.findOne({city : req.body.city});
      req.body.city = city._id;

      await Itinerary.create(req.body);

      res.json({
        success: true,
        response: req.body
      })
    } catch (error) {
      console.log(error);

      res.json({
        success: false,
        response: error.message
      })
    }
  },
  updateItinerary: async (req, res, next) => {
    const { id } = req.params;
    try {
      await Itinerary.findByIdAndUpdate(id, req.body);

      res.json({
        success: true,
        response: req.body
      })
    } catch (error) {
      console.log(error);
    }
  },
  deleteItinerary: async (req, res, next) => {
    const { id } = req.params;
    try {
      await Itinerary.findByIdAndDelete(id);

      res.json({
        success: true,
        response: "Deleted document with id " + id
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export default itinerariesController;