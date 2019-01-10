let express = require('express');
let path = require('path');

let app = express();

app.get('/home', function(req, res) {
	app.set('views', process.argv[3]);
	app.set('view engine', 'pug');
    res.render('index', {date: new Date().toDateString()});
})

app.listen(process.argv[2])