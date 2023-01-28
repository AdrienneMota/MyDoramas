import prisma from "../database/server.js";
import { categories } from "@prisma/client";

export type CategoryInput = Omit<categories, "id">

async function createCategory(category: CategoryInput) {
    await prisma.categories.create({
        data: category
    })
}

async function getCategories() {
    const data = await prisma.categories.findMany()
    return data
}

const categoriesRepository = {
    createCategory,
    getCategories
}

export default categoriesRepository