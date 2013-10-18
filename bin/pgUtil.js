
// 连接postgresql

var pg = require('pg');  
function connectPg(){
	var conString = "tcp://postgres:111111@localhost/blog";  
	var client = new pg.Client(conString);  //构造一个数据库对象  

	client.connect(function(error, results) {  
    if(error){  
		        console.log('ClientConnectionReady Error: ' + error.message);  
		        client.end();  
		        return;  
    		  }  
    
	});
	return client;
}
function query(client,selectSQLString)  {  
    // console.log("select beginning");  
    client.query(selectSQLString,  function selectCb(error, results, fields)  
    {  
        // console.log("in select callback function");  
        if (error)  
        {  
            console.log('GetData Error: ' + error.message),  
            client.end();  
            return;  
        }  
        return results;
        /*解析结果

        if(results.rowCount > 0)  
        {  
            var firstResult,  
            resultSet = '';  
            for(var i = 0, len = results.rowCount; i < len; i++)  
            {  
                firstResult = results.rows[i];   
                resultSet += 'id:' + firstResult['username'] + ' ' + 'name:' + firstResult['name'] + ' ' +   
                             'pwd:' + firstResult['password'] + '\n';   
            }  
        }  
        console.log("*******************"+resultSet);  
         
          */
    });  
    // console.log("select end\n");  
}
exports.query = query;
exports.connectPg = connectPg;
