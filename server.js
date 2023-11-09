const express = require('express')
const dotenv = require('dotenv')


const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, console.log(`server started on port ${PORT}`))

app.get("/", (req,res)=>{
    res.status(200).send("Welcome to my app")
})