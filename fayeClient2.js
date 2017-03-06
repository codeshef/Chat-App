var http = require('http');
var Faye = require('faye');
var client = new Faye.Client('http://localhost:8001/faye');
client.connect();
var sub = client.subscribe('/messages',function(message)
{
	console.log("MESSAGE GOT!  :  ",message.text);
});


