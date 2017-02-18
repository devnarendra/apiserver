var connection = require('../utils/dbConnection_utils')
  , mongoose = require('mongoose')
  , Schema = connection.Schema;

var Person = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  mobNo: {
    type: Number,
    unique: true
  },
  image:{
    type: String
  }
});

module.exports = mongoose.model('persons', Person);
