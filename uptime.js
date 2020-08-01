let express = require("express"),
    http = require('http'),
    app = express();

app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendStatus(200); // Status: OK
});

let listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//don't need to fill anything on process.env.PROJECT_DOMAIN or process.env.PORT
//wait 5 minutes of forward : )
