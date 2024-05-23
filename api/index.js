import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

const app = express()

//Não esquecer de baixar as dependencias do front e do Back
app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(8800)