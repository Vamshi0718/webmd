const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/set-cookie') {
        res.writeHead(200, {
            'Set-Cookie': 'username=JohnDoe; email=johndoe@example.com',
            'Content-Type': 'text/plain'
        });
        res.end('Cookies have been set');
    } else if (req.url === '/get-cookie') {
        const cookies = req.headers.cookie;
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Cookies retrieved: ${cookies}`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
