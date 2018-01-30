const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
  //res.send('Hello World'); Send HTTP response
});

app.listen(3000, () => {
  console.log("Listening to port 3000....");
});
