Websocket Demo
==============

Purpose
--------------

Testing Websockets on OpenShift.

How To
--------------

Push to an OpenShift instance, and then connect on port 8000.

For command-line testing, use wscat:

	wscat --connect ws://websockets-julian.freestyle.com:8000

	This sample project is an "echo server". Anything you type will be printed
	back to you from the server.

