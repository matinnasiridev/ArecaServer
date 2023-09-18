const express = require('express')
const app = express()
const port = 1200

app.listen(port,()=> console.log(`Server On Port ${port} is Running...`))