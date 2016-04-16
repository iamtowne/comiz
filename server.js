'use strict'

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const config = require('./webpack.config')

const port = 3990

const compiler = webpack(config)
const app = express()

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}))

app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.get('/api/*', (req, res) => {
  // Imitate RESTful API pattern
  let path = req.path
  path = /\/comics\/[\d]+(\/episodes)?/.test(path) ? `${path}/data` : path
  res.sendFile(`${__dirname}/src${path}`)
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Open up http://localhost:%s/ in your browser.', port)
  }
})
