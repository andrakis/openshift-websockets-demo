var WebSocket = require('ws'),
    ws = new WebSocket('ws://websockets-julian.freestyle.com:8000');

var messagesSent = 0;
var maxMessages = 5;

function sendSomething() {
	ws.send('something');
	messagesSent++;
}

ws.on('open', function() {
	sendSomething();
});
ws.on('message', function(message) {
	console.log('received: %s', message);
	if(messagesSent <= maxMessages) {
		sendSomething();
	} else {
		console.log("Max messages sent, disconnecting");
		ws.close();
	}
});
