import { doramas } from "@prisma/client";
import prisma from "../database/server.js";

export type DoramaInput = Omit<doramas, "id" >;

// async await se usa em toda a requisição para o banco pois assim a aplicação pausa para executar a próxima ação

async function getDoramas() {
    const data = await prisma.doramas.findMany()
    return data
}

async function createDorama( dorama : DoramaInput) {
    await prisma.doramas.create({
        data : dorama
    })
}


const doramaRepository = {
    createDorama,
    getDoramas
}

export default doramaRepository
  
