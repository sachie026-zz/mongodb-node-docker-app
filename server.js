const express = require("express");
const app = express();
const connectDB = require("./src/connections")
const User = require("./src/User.model");


const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello from node server")
})

app.get('/users', async (req, res) => {
    console.log("Get users")
    const users = await User.find();
    res.json(users);
})

app.post('/user-create', async (req, res) => {
    const user = new User({ username: "userTest" });
    await user.save().then(() => console.log('User created'))
    res.send("User created \n");
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