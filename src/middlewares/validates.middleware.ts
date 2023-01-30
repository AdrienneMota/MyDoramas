import { Request, Response, NextFunction } from "express";
import { DoramaInput } from "../protocols/dorama.protocol.js";
import { MainCharacternput } from "../protocols/character.protocol.js";
import { CategoryInput } from "../protocols/category.protocol.js";

export function validateSchema(schema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const data = req.body as DoramaInput | MainCharacternput | CategoryInput;
      const {error} = schema.validate(req.body, {abortEarly: false});
  
      if (error) {
        const message = error.details.map(e => e.message);
        console.log('Error: ' + message);
        return res.status(422).send(message);
      }
  
      res.locals.data = data;
      next();
    };
  }