import express from "express";
import router from "./router.js"

const server = express();

server.get('/', (req, res, next) => {
  res.send("Estás haciendo una petición GET al servidor en /")
});

server.use("/api", router)

export default server;