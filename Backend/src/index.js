import express from 'express'
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine'
import initRouterss from './routes/router'
require('dotenv').config()
const app = express()
const port = process.env.PORT || 9090
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
viewEngine(app)
initRouterss(app)
app.listen(port, () => {
    console.log('server is runing on the port: ' + port);
})
