const express = require('express');
const app = express();

app.get('/temperature',function(req,res){
	res.send('21°C');
});

app.get('/humidity',function(req,res){
	res.send('18%');
});

app.listen(3000,function(){
	console.log('Server listening on port 3000');
});

console.log("prueba desde sensor");
