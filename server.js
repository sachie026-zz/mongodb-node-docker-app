const express = require("express");
const app = express();
const connectDB = require("./src/connections")


const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello from node server")
})

app.get('/Users', (req, res) => {
    console.log("Get users")
})

app.listen(PORT, () => {
    console.log("App started")
    console.log(`Listening at port ${PORT}`)
})

connectDB().then(() => {
    console.log("Mongo db connected")
})
.catch(err => {
    console.log(`error : ${err}`)
})