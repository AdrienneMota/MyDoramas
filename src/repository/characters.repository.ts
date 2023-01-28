import prisma from "../database/server.js";
import {main_characters} from "@prisma/client"

export type CharacterInput = Omit<main_characters, "id">

async function createCharacter(character: CharacterInput) {
    await prisma.main_characters.create({
        data: character
    })
}

async function getCharacters() {
    const data = await prisma.main_characters.findMany()
    return data
}

const charactersRepository = {
    createCharacter, 
    getCharacters
}

export default charactersRepository