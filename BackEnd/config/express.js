var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
const path = require('path');


module.exports = function () {
  var app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())


app.set('view engine', 'ejs');
app.set('views', path.join('app', 'views'));

  require("../app/user/UserRoutes")(app)
  require("../app/admin/adminRoutes")(app);
  require("../app/customer/customerRoutes")(app);
  require("../app/common/commonRoutes")(app);
  require("../app/HospitalManagement/hospitalManagementRoutes")(app);
  return app;
}