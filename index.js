const express = require('express')
const app = express()
const progress = require('./extras/progress')


app.get('/val/:value', function(req, res){
//	if(typeof req.params.value != 'number' )
//		res.send("Error")
	res.set("Content-Type", "image/svg+xml")
	res.send(progress(req.params.value))
})	

app.listen(8000, function(){
	console.log("server is running")
})
