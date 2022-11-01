const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.json({ response: "app is listening!" });
});

app.listen(port, () => console.log(`listening on ${port}!!`));
