import { Router } from "express";
import doramaController from "../controllers/dorama.controllers.js";

const doramaRouter = Router() 

doramaRouter.post("/dorama", doramaController.createDorama)

export default doramaRouter