"use strict";
exports.__esModule = true;
var express_1 = require("express");
// Boot express
var app = (0, express_1["default"])();
var port = 5000;
// Application routing
app.use("/", function (req, res, next) {
  res.status(200).send({ data: "Hello from Holiday SA" });
});
// Start server
app.listen(port, function () {
  return console.log("Server is listening on port ".concat(port, "!"));
});
