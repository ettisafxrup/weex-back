const loginApp = require("express")()
const User = require("../model/user.Schema")

loginApp.post("/", async (req, res) => {
  try {
    const { email, password } = req.body
    if (email == "" || password == "") {
      return res.json({ msg: "Fields cannot be empty!" })
    }
    const findUser = await User.findOne({ email, password })
    if (findUser) {
      res.json({
        msg: "Your data has been restored!!",
        storage: findUser.localStorage,
      })
    } else {
      res.json({ msg: "Nothing found! Check it again!" })
    }
  } catch (e) {
    res.json({ msg: "Oops, something went wrong!" })
  }
})
module.exports = loginApp
