import { Request, Response } from "express";
import Joi from "joi";
import charactersRepository, { CharacterInput, CharacterUpdate } from "../repository/characters.repository.js";

const characterSchema = Joi.object({
  "name" : Joi.string().min(3).required(),
  "dorama_id" : Joi.number().integer().required(),
  "actor" :  Joi.string().min(3).required()
})

async function createCharater(req: Request, res: Response) : Promise <void> {
    const character = req.body as CharacterInput

    try {
        const { error } = characterSchema.validate(character, {abortEarly: false})
        if(error){
            const erros = error.details.map( d => d.message)
            res.send(erros)
            return
        }
        await charactersRepository.createCharacter(character)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

async function getAllCharaters(req: Request, res: Response) : Promise <void> {

    try {
        const allCharacter = await charactersRepository.getCharacters()
        res.send(allCharacter)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

async function updateCharater(req: Request, res: Response) : Promise <void> {
    const character = req.body as CharacterUpdate

    try {
        await charactersRepository.updateCharacter(character)
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

async function deleteCharater(req: Request, res: Response) : Promise <void> {
    const characterId = parseInt(req.params.id) 

    try {
        await charactersRepository.deleteCharacterById(characterId)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

const characterControllers = {
    createCharater,
    getAllCharaters,
    updateCharater,
    deleteCharater
}

export default characterControllers
