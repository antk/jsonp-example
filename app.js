
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.type("text/plain");
  res.send("i am a beautiful butterfly");
});

app.get("/jsonp", function(req, res) {
  var callback = req.query.callback;
  var data = [{name: "Peter Parker", alias: "Spider-Man"},{name:"Eddie Brock", alias: "Venom"}];
  res.type("text/javascript");
  res.send(callback + "('" + JSON.stringify(data) + "')");
});

app.listen(process.env.PORT || 3000);
