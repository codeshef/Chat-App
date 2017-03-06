var http = require('http');
 Faye = require('faye');
var client = new Faye.Client('http://localhost:8001/faye');
var publication = client.publish('/messages',{text:"Hello"});
 publication.callback(process.exit);

