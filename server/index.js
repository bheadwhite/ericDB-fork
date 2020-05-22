const express = require('express')
const app = express()
const ctrl = require('./controller/')

const SERVER_PORT = 4000

app.use(express.json())

app.get()
app.post()
app.put()
app.delete()







app.listen(SERVER_PORT, () => 
console.log(`Listening on port ${SERVER_PORT}`))