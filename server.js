const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const CandidateController = require("./controllers/candidate.controller")
const sequelize = require("./database/db")


const PORT = process.env.PORT || 3000

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === 'development') {
//   sequelize.sync({ alter: true })
//     .then(() => console.log('Dev DB synced (alter)'))
//     .catch(err => console.error('Sync error:', err));
// }

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
  

