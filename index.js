console.clear()
require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { PORT, DB } = process.env
const cors = require("cors")
// - Routing Import
const createRoute = require("./routes/createCloud")
const backupCloud = require("./routes/backupCloud")
const homePathRouter = require("./routes/slashRoute")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

mongoose.set("strictQuery", false)
mongoose.connect(DB, () => console.log("MognoDBB has been Connected"))

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
)

app.use(homePathRouter)
app.use("/create", createRoute)
app.use("/backup", backupCloud)
