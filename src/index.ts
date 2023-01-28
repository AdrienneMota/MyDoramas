import express from "express";
import doramaRouter from "./routes/doramas.routers.js";
import cateroryRouter from "./routes/categories.routers.js";
import characterRouter from "./routes/characters.routers.js";
import dotenv from "dotenv";

dotenv.config()

const app = express()
app.use(express.json())
app.use(doramaRouter)
app.use(cateroryRouter)
app.use(characterRouter)

app.listen(5000, () => console.log("Serve running in port 5000"))