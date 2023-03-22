import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

// app.listen(8800)
const port = process.env.PORT || 8800;


app.listen(port, () => console.log(`listening on ${port}`));
