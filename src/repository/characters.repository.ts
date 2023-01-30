
import prisma from "../database/server.js";
import {main_characters} from "@prisma/client"

export type CharacterInput = Omit<main_characters, "id">
export type CharacterUpdate = Partial<main_characters>

async function createCharacter(character: CharacterInput) {
    await prisma.main_characters.create({
        data: character
    })
}

async function getCharacters() {
    const data = await prisma.main_characters.findMany()
    return data
}

async function updateCharacter(character: CharacterUpdate) {
    await prisma.main_characters.upsert({
       where: {
        id: character.id || 0,
       },
       create: character as CharacterInput,
       update: character
    })
}

async function deleteCharacterById(id: number) {
    await prisma.main_characters.delete({
      where: {
        id: id
      }
    });
  }

const charactersRepository = {
    createCharacter, 
    getCharacters,
    updateCharacter,
    deleteCharacterById
}

export default charactersRepository