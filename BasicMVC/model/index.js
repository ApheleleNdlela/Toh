const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

mongoose.promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./hero.model.js")(mongoose);

module.exports = db;