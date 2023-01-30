import { main_characters } from "@prisma/client"; 

export type MainCharacternput = Omit<main_characters, "id" >

export type updateMainCharacternput = Partial<main_characters>