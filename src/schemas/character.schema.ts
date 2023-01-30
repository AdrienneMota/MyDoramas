import Joi from "joi";

const characterSchema = Joi.object({
    "name" : Joi.string().min(3).required(),
    "dorama_id" : Joi.number().integer().required(),
    "actor" :  Joi.string().min(3).required()
  })