import { doramas } from "@prisma/client"; 

export type DoramaInput = Omit<doramas, "id" >

export type updateDoramaInput = Partial<doramas>
