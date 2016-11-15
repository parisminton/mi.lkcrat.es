var express = require('express'),
    app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

// routes
app.get('/', function (req, res) {
  res.render('index', {title: 'Welcome to Friday', message: 'I am looking forward to a wonderful day.'});
});

// start the server
app.listen(3000, function () {
  console.log('crates listening on port 3000!');
})
