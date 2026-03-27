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

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
})