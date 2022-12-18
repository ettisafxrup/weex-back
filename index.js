console.clear()
require("dotenv").config()
const express = require("express")
const app = express()
const { PORT } = process.env
const homeRoute = require("./routes/home")

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
)
app.use(homeRoute)
