const express = require('express')
const app = express()
const port = 3000

app.get('/api/data', (req, res) => {
    const data = {
        message: "Hello from server",
        timestamp: new Date()
    }
    res.json(data)
})

app.get("/hello", (req, res) => {
    res.json("HELLO")
})

app.get("/hello/:name", (req, res) => {
    const name = req.params.name
    res.json(`Hello ${name}`)
})

app.post('/api/data', (req, res) => {
    const data = {
        message: "Data received",
        timestamp: new Date()
    }

    req.on('data', chunk => {
        console.log(`Received chunk: ${chunk}`)
    })

    req.on('end', () => {
        res.json(data)
    })

    res.on('error', err => {
        console.error(`Error sending response: ${err}`)
    })
}) 

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
})