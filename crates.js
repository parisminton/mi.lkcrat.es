var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Welcome to Friday');
})

app.listen(3000, function () {
  console.log('crates listening on port 3000!')
})
