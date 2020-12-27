const express = require('express')
const path = require('path')
const cors = require('cors')
const vhost = require('vhost')


const app = express()




app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Router
const apiRouter = require('./routes/api')
// // Definisikan Router pada path "/api"
app.use('/api', apiRouter)


app.listen(90,()=> console.log('server running ..'))




