const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


const PORT = process.env.PORT || 3000

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post((res, req) =>{
    
})