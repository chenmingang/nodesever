function route(pathName,res){
	
	var fs = require('fs'), fileContent = 'nothing';
	fs.readFile("../webapp"+pathName, "utf-8", function(err, file) {  
	    if(err) {  
	    	fileContent="<html><body><div style='width:500px;height:300px;font-size:60px;margin:0 auto;'>404 NOT FOUND!</div></body></html>";
	        console.log(err);
	        res.write(fileContent);
			res.end();
	        return;  
	    }
    fileContent = file;
    res.write(fileContent);
	res.end();
});
}
exports.route = route;