require("app-module-path").addPath(__dirname);
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'ActionItem', 'dist', 'ActionItem')));

// Default route
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'ActionItem/dist/ActionItem/index.html'));
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

