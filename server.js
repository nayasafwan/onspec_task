const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const query  = require("./database/db")


const PORT = process.env.PORT || 3000

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
  

