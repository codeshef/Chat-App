var http = require ('http'); 
var fs = require('fs');
var server = http.createServer (function(request, response){ 	
response.writeHead ({"Content-Type": "text/html"}); 
response.write('Hello');
});	
server.listen (8000); 	
console.log ('Chat app started!');
