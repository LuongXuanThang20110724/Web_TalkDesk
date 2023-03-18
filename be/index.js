const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const dotenv = require("dotenv")

dotenv.config()
const port = process.env.PORT

const URL = process.env.DATABASE_URL

app.use(express.json())
app.use(cors())
mongoose
  .connect(URL, { dbName: "TalkDeskDB" })
  .then(() => console.log("Connect successfully!"))
  .then(() =>
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  )
  .catch((err) => console.log(err))
