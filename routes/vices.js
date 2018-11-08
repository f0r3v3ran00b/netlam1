var express = require('express');
var router = express.Router();

router.get('/notpug', function (req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Pug, not Pug !</h1>');
  res.end();
});

router.get('/pug', function (req, res, next) {
  res.render('vices', {
    vices: ['Wine', 'Women', 'Song']
  });
});

router.get('/', (req, res, next) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Hello from Express.js using routes ^^^^ <h1>');
  res.end();
});


module.exports = router;
