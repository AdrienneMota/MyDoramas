import { Router } from "express";
import categoriesController from "../controllers/categories.controllers.js";

const cateroryRouter = Router()

cateroryRouter.post('/category', categoriesController.createCategory)
cateroryRouter.get('/categories', categoriesController.getCategories)

export default cateroryRouter