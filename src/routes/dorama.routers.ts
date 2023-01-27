import { Router } from "express";
import doramaController from "../controllers/dorama.controllers.js";

const doramaRouter = Router() 

doramaRouter.post("/dorama", doramaController.createDorama)
doramaRouter.get("/doramas", doramaController.getAllDoramas)

export default doramaRouter