const express = require("express")
const cors =  require('cors')
const fetch = require('node-fetch');
const { response } = require("express");

const app = express()

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.post("/api", (req, res) => {
  const { country } = req.body
  fetch(`https://restcountries.eu/rest/v2/name/${encodeURI(country)}`)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((e) => console.log(e))
})

const port = 8000
app.listen(port, () => console.log(`[app]: Listening on port ${port}`))