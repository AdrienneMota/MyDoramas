import { doramas } from "@prisma/client";
import prisma from "../database/server.js";

export type DoramaInput = Omit<doramas, "id" >;

// async await se usa em toda a requisição para o banco pois assim a aplicação pausa para executar a próxima ação

async function createDorama( dorama : DoramaInput) {
    await prisma.doramas.create({
        data : dorama
    })
}

const doramaRepository = {
    createDorama,
}

export default doramaRepository
  
