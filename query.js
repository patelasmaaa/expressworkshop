let express = require('express');
let app = express();
let str = "";
app.get('/search', function(req, res){
	/*let result = req.query.results;
	let include = req.query.include_tabs;
	console.log(result + include);*/
	res.send(req.query);
}).listen(process.argv[2]);
