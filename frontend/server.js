import express from 'express'

import App from './src/index.jsx'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

var app = express()

app.get('/', function(req, res){
   res.send(ReactDOMServer.renderToString(<App />))
})

app.listen(8080)
