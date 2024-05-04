process.env.NODE_ENV = process.env.NODE_ENV || "development";
var config = require("./config/config")
var express = require("./config/express");
var server = express();
var DB = require('./config/mongoose');


server.listen(config.port, () => {
  process.env.port = config.port;
  process.env.db = config.database;
  console.log(`connected to :${config.port}`);
});


