import express from "express";
import citiesController from "../controllers/citiesController.js";
import itinerariesController from "../controllers/itinerariesController.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Estás haciendo una petición GET al servidor en /api")
});

router.get("/cities", citiesController.getCities);
router.get("/cities/:id", citiesController.getCity);
router.post("/cities", citiesController.createCity);
router.put("/cities/:id", citiesController.updateCity);
router.delete("/cities/:id", citiesController.deleteCity);

router.get("/itineraries", itinerariesController.getItineraries);
router.get("/itineraries/:id", itinerariesController.getItinerary);
router.get("/itineraries/city/:cityId", itinerariesController.getItinerariesByCity);
router.post("/itineraries", itinerariesController.createItinerary);
router.put("/itineraries/:id", itinerariesController.updateItinerary);
router.delete("/itineraries/:id", itinerariesController.deleteItinerary);

export default router;