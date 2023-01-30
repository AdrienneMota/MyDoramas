

import {Request, Response} from "express";
import Joi from "joi";
import categoriesRepository, { CategoryInput } from "../repository/categories.repository.js";

const categorySchema = Joi.object({
    "name" : Joi.string().min(3).required()
})

async function createCategory(req: Request, res: Response) : Promise <void> {
    const category = req.body as CategoryInput
    // console.log(category)
    try {
        const { error } = categorySchema.validate( category, { abortEarly: false})
        if(error){
            const erros = error.details.map( d => d.message)
            res.status(422).send(erros)
            return
        }
        await categoriesRepository.createCategory(category)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

async function getCategories(req: Request, res: Response) : Promise <void> {
    
    try {
        const allcategories = await categoriesRepository.getCategories()
        res.send(allcategories)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

const categoriesController = {
    createCategory,
    getCategories
}

export default categoriesController