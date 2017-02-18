var mongoose = require("mongoose")
  , config = require('../config/dev')
  , connection = mongoose.connect(config.mongodb.uri);

module.exports = connection;
