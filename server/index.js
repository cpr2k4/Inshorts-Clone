const express = require('express');
const app = express();
const Connection = require('./database/db')
const router = require('./routes/route.js');
const cors = require('cors');
const dotenv = require('dotenv');

const PORT=8080;

//config .env
dotenv.config();

//CORS(Place CORS before)
app.use(cors());

//Router
app.use("/",router);

//credentials from .env
const DB_URL = process.env.DB_URL;

//server listen
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//Connect to mongo db
Connection(DB_URL);

