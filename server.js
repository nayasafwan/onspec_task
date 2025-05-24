const express = require("express");
const app = express();
const dotenv = require("dotenv");
const models = require("./models")
dotenv.config();

const candidateRoute = require("./routes/candidate.route")


const PORT = process.env.PORT || 3000

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === 'development') {
//   sequelize.sync({ alter: true })
//     .then(() => console.log('Dev DB synced (alter)'))
//     .catch(err => console.error('Sync error:', err));
// }

//Sync Database
models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});


app.use("/", candidateRoute)

if(process.env.NODE_ENV != "test"){
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
}

  

module.exports = app;
