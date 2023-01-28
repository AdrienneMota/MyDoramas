import { Router } from "express";
import doramaController from "../controllers/dorama.controllers.js";

const doramaRouter = Router() 

doramaRouter.post("/dorama", doramaController.createDorama)
doramaRouter.get("/doramas", doramaController.getAllDoramas)
doramaRouter.get("/doramas/watched", doramaController.getAllDoramasWatched)
doramaRouter.get("/doramas/dontwatched", doramaController.getAllDoramasDontWatched)

export default doramaRouter