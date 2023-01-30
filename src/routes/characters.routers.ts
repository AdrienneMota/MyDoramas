import { Router } from "express";
import characterControllers from "../controllers/characters.controllers.js";

const characterRouter = Router()

characterRouter.post('/character', characterControllers.createCharater)
characterRouter.get('/characters', characterControllers.getAllCharaters)
characterRouter.patch('/characters/update', characterControllers.updateCharater)
characterRouter.delete('/characters/:id', characterControllers.deleteCharater)

export default characterRouter
