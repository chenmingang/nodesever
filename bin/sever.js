var http = require('http'); 
var url = require("url");
var handleReq = require("./handleReq");

http.createServer(function (req, res) { 
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	var urlParsed = url.parse(req.url);

	handleReq.handleGet(urlParsed,res); 
	

}).listen(8124, "127.0.0.1"); 
console.log('Server running at http://127.0.0.1:8124/'); 
