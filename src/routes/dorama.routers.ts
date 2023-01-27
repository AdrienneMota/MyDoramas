import { Router } from "express";
import { postDorama } from "../controllers/dorama.controllers.js";

const doramaRouter = Router() 

doramaRouter.get("/dorama", postDorama)

export default doramaRouter