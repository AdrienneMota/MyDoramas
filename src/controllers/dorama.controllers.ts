import { Request, Response } from "express"
import { DoramaInput } from "../repository/doramas.repository.js"
import doramaRepository from "../repository/doramas.repository.js"
import Joi from "joi"

const doramaSchema = Joi.object({
    "name" : Joi.string().min(4).required(),
    "overview" : Joi.string().min(3).required(),
    "grade" : Joi.number().integer().less(6).required(),
    "category_id" : Joi.number().integer().required(),
    "watched" : Joi.boolean().required()

})

async function createDorama(req: Request, res: Response) : Promise<void> {
    const dorama = req.body as DoramaInput

    try {
        const { error } = doramaSchema.validate( dorama, { abortEarly: false})
        if(error){
            const erros = error.details.map( d => d.message)
            res.status(422).send(erros)
            return
        }
        await doramaRepository.createDorama(dorama)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

async function getAllDoramas(req: Request, res: Response) {
    try {
        const allDoramas = await doramaRepository.getDoramas()
        res.send(allDoramas)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

async function getAllDoramasWatched(req: Request, res: Response) {
    try {
        const allDoramasWatched = await doramaRepository.getDoramasWatched()
        res.send(allDoramasWatched)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

async function getAllDoramasDontWatched(req: Request, res: Response) {
    try {
        const doramasDontWatched = await doramaRepository.getDoramasDontWatched()
        res.send(doramasDontWatched)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

const doramaController = {
    createDorama,
    getAllDoramas,
    getAllDoramasWatched,
    getAllDoramasDontWatched
}

export default doramaController
