let express = require('express');

let app1 = express();  // Compliant
app1.disable("x-powered-by");

app.get('/',function(req,res) {
  res.send("PT PROJECT NODE JS APP");
});

app.listen(4000);
