import { doramas } from "@prisma/client";
import prisma from "../database/server.js";

export type DoramaInput = Omit<doramas, "id" >;

// async await se usa em toda a requisição para o banco pois assim a aplicação pausa para executar a próxima ação

async function createDorama( dorama : DoramaInput) {
    await prisma.doramas.create({
        data : dorama
    })
}

async function getDoramas() {
    const data = await prisma.doramas.findMany()
    return data
}

async function getDoramasWatched() {
    const data =  await prisma.doramas.findMany({
        where: {
            watched : true
        }
    })
    return data
}

async function getDoramasDontWatched() {
    const data =  await prisma.doramas.findMany({
        where: {
            watched : false
        }
    })
    return data
}


const doramaRepository = {
    createDorama,
    getDoramas,
    getDoramasWatched,
    getDoramasDontWatched
}

export default doramaRepository
  
