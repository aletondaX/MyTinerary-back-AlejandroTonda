import express from "express";
import citiesController from "../controllers/citiesController.js";
import itinerariesController from "../controllers/itinerariesController.js";
import authController from "../controllers/authController.js";
import validator from "../middlewares/validator.js";
import { signUpSchema } from "../validators/signUpValidator.js";
import { signInSchema } from "../validators/signInValidator.js";
import passport from "../middlewares/passport.js";

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

router.post("/auth/signup", validator(signUpSchema), authController.signUp);
router.post("/auth/login", validator(signInSchema), authController.signIn);
router.get("/auth/token", passport.authenticate("jwt", {session: false}), authController.loginWithToken);

export default router;