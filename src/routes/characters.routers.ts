import { Router } from "express";
import characterControllers from "../controllers/characters.controllers.js";

const characterRouter = Router()

characterRouter.post('/character', characterControllers.createCharater)
characterRouter.get('/characters', characterControllers.getAllCharaters)

export default characterRouter
