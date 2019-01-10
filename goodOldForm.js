let express = require('express');
let path = require('path');
let bodyparser = require('body-parser');

let app = express();
app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){
	
	let reverseStr = req.body.str.split('').reverse().join('');
	res.end(reverseStr);
})
app.listen(process.argv[2]);