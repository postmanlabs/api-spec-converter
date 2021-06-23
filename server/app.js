const express = require('express')
const path = require('path')
const converterRouter = require('./src/routers/converterRouter')
const configRouter = require('./src/routers/configRouter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(converterRouter)
app.use(configRouter)

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

module.exports = app