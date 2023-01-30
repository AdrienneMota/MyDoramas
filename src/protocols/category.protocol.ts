import { categories } from "@prisma/client"; 

export type CategoryInput = Omit<categories, "id" >

export type updateCategoryInput = Partial<categories>