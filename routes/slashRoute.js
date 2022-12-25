const homePathRouter = require("express").Router()
homePathRouter.get("/", (req, res) => res.json({ greet: "Hello!" }))
module.exports = homePathRouter
