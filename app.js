var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("PT PROJECT NODE JS APP");
});

app.listen(4000);
