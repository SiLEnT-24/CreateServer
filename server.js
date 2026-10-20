import { createServer } from 'http';
createServer((req, res) => {
    res.write('<h1>HTTP Server is running on port 5000</h1>');
    res.end('Hello, World!');
}).listen(5000);