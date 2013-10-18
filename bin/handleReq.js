var querystring = require("querystring");
var router = require('./router');


function handleGet(urlParsed,res){
	var getData = querystring.parse(urlParsed.query); 
	console.log("data"+JSON.stringify(getData));


	var pathName = urlParsed.pathname;
	router.route(pathName,res);
}
exports.handleGet = handleGet;