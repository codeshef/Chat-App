var http = require('http');
var express = require('express');
var Faye = require('faye');
var app = express();
var server = http.createServer(app);
var bayeux = new Faye.NodeAdapter({mount : '/faye',timeout : 5});
bayeux.attach(server);
var port = 8001;
server.listen(port,function()
{
	console.log('Message found!');
});

