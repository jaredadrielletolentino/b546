let http = require("http");

const port = 4000;

// Mock Database
let items = ['Laptop', 'Desktop', 'Tablet'];

http.createServer(function (request, response) {

	if(request.url == '/greetings') {
		response.writeHead(200, {'Content-Type': 'Text/plain'});

		response.end('Hello World');

	} else if (request.url == '/homepage') {
		response.writeHead(200, {'Content-Type': 'Text/plain'});

		response.end('This is the Homepage');

	} else if (request.url == '/items' && request.method === 'GET') {
		
		console.log(request.method);

		response.writeHead(200, {'Content-Type': 'Text/plain'});

		response.end(items.join(", "));

	} else if (request.url == '/items' && request.method === 'POST') {

		console.log(request.method);

		response.writeHead(200, {'Content-Type': 'Text/plain'});

		response.end("This route will be used to add another item");

	} else {
		response.writeHead(404, {'Content-Type': 'Text/plain'});

		response.end('Page not available');
	}
	

}).listen(port);

console.log('Server running at localhost:4000');