var WebSocket = require('ws')
, ws = new WebSocket('ws://websockets-julian.freestyle.com:8000');
ws.on('open', function() {
	ws.send('something');
});
ws.on('message', function(message) {
	console.log('received: %s', message);
});
