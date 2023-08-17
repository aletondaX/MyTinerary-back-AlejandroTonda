import City from "../models/City.js"

const citiesController = {
  getCities: async (req, res, next) => {
    let cities;
    try {
      cities = await City.find();
      
      res.json({
        success: true,
        response: cities
      })
    } catch (error) {
      console.log(error);
    }
  },
  getCity: async (req, res, next) => {
    const { id } = req.params;
    let city;
    try {
      city = await City.findById(id);
  
      res.json({
        success: true,
        response: city
      })
    } catch (error) {
      console.log(error);
    }
  },
  createCity: async (req, res, next) => {
    try {
      await City.create(req.body);

      res.json({
        success: true,
        response: req.body
      })
    } catch (error) {
      console.log(error);
    }
  },
  updateCity: async (req, res, next) => {
    const { id } = req.params;
    try {
      await City.findByIdAndUpdate(id, req.body);

      res.json({
        success: true,
        response: req.body
      })
    } catch (error) {
      console.log(error);
    }
  },
  deleteCity: async (req, res, next) => {
    const { id } = req.params;
    try {
      await City.findByIdAndDelete(id);

      res.json({
        success: true,
        response: "Deleted document with id " + id
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export default citiesController;