const homeApp = require("express")()

homeApp.get("/", (req, res) => {
  res.json({
    hi: "hello",
  })
})

module.exports = homeApp
