import express from "express";
import citiesController from "../controllers/citiesController.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Estás haciendo una petición GET al servidor en /api")
});

router.get("/cities", citiesController.getCities)
router.get("/cities/:id", citiesController.getCity)
router.post("/cities", citiesController.createCity)
router.put("/cities/:id", citiesController.updateCity)
router.delete("/cities/:id", citiesController.deleteCity)

export default router;