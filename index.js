var express = require('express'),
  push = require('./push.js');

var app = express();

// Body parser extracts POST data
app.use(express.bodyParser());

// URL used to register for push notifications
app.post('/register', push.register);

app.listen(3000, function(err) {
  if(err) {
    throw err;
  }

  console.log('Listening on 127.0.0.1:3000');
});