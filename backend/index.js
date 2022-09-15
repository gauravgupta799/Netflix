const express = require('express')
const app = express();
const Port = 8800;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute =require('./routes/movies');
const listRoute =require('./routes/list');

dotenv.config();
app.use(express.json());

app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute);
app.use("/api/movies" , movieRoute);
app.use("/api/lists" , listRoute);


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Database connection established");
}).catch((err) => {
    console.error(err);
    
})

app.listen(Port, ()=>{
    console.log(`Server is running on ${Port}`);
})