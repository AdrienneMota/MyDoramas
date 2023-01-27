import express from "express";
import doramaRouter from "./routes/dorama.routers.js";
import dotenv from "dotenv";
dotenv.config()

const app = express()
app.use(express.json())
app.use(doramaRouter)

app.listen(5000, () => console.log("Serve running in port 5000"))