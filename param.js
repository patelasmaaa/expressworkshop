let express = require('express');
let app = express();

app.param('id', function (req, res, next, id) {
  req.id = id
  next()
})
app.get('', function (req, res, next) {
  console.log(req.id)
  next()
})

app.put('/message/:id', function(req, res){
	let id = req.params.id;
	let hash = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')
   res.end(hash);
});
app.listen(process.argv[2]);
