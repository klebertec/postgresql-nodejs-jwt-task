require('dotenv').config()
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(routes)

app.listen(8080, () => console.log('Server on port 8080'))