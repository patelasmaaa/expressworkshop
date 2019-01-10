let express = require('express');
let fs =require('fs');

let app = express();
let object;
app.get('/books', function(req, res){
	fs.readFile(process.argv[3], function(error, data){
		object = JSON.parse(data);
		//console.log(object)
		res.json(object);
	})

}).listen(process.argv[2]);

//Solution as given in workshop:
/*const express = require('express')
    const app = express()
    const fs = require('fs')

    app.get('/books', function(req, res){
      const filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.sendStatus(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.sendStatus(500)
        }
        res.json(books)
      })
    })

    app.listen(process.argv[2])
*/
