const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/home') {
        res.end('Welcome to Home Page');
    } else {
        res.end('Page Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
