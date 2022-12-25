const signupApp = require("express")()
const User = require("../model/user.Schema")

signupApp.post("/", async (req, res) => {
  try {
    const { email, password, localStorage } = req.body
    if (email == "" || password == "") {
      return res.json({ msg: "Fields cannot be empty!" })
    }
    const newUser = new User({
      ...req.body,
      localStorage: JSON.stringify(localStorage),
    })
    const findUser = await User.findOne({ email, password })
    if (findUser) {
      const updateUser = await User.updateOne(
        { email },
        { localStorage: JSON.stringify(localStorage) }
      )
      console.log(updateUser)
    } else {
      await newUser.save()
    }

    res.json({ msg: "Account has been created!" })
  } catch (e) {
    console.log(e)
    res.json({ msg: "Something went wrong" })
  }
})

module.exports = signupApp
