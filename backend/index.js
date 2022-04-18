const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth')
dotenv.config();

app.use(express.json());



app.use("/api/auth" ,authRoute);


app.use("/", (req, res) => {
    // res.status(200).json("Hii")
    res.send("Welcome to my account ")
})
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Database connection established");
}).catch((err) => {
    console.error(err);
    
})

app.listen(8800, ()=>{
    console.log("Backend server  running.")
})