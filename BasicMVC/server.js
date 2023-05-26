const express = require("express");
require('dotenv').config()
const cors = require("cors");
const app = express();
const initRoutes = require("./routes/user.routes")
const PORT = process.env.PORT;

const DB = require("./config/db.config")
const db = require('./model');
// const { default: mongoose } = require("mongoose");

app.use(express.json());
app.use(cors())

app.use(express.urlencoded({ extended: true, limit: '50mb'}));

db.mongoose.connect(DB.db_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(console.log("connected successfully"))
    .catch(err=>{console.log("error message : " + err)})

initRoutes(app)

app.listen(PORT, () => {
    console.log(`server is running @ port ${PORT}.`);
}); 







