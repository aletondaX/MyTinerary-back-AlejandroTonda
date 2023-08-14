import "dotenv/config.js";
import "../../config/database.js";
import Category from "../category.js";

let categories = [
  {
    name: "ale",
    color: "rojo",
    // create_by: ObjectId("1234645645")
  },
  {
    name: "santi",
    color: "azul",
    // create_by: ObjectId("456465646456")
  }
]

Category.insertMany(categories);