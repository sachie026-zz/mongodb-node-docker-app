const express = require("express");
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello from node server")
})

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})