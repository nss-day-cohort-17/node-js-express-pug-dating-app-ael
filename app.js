'use strict'

require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes/')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

app.set('view engine', 'pug')

// Middleware
app.use(express.static('public'))
app.use(routes)

// Render 404 if no other route matched
app.use((req, res) => {
	res.render('404')
})

// Listen
app.listen(port, () => console.log(`listening on port ${port}`))
