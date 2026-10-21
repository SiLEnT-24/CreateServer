import { createServer } from 'http';

const server = createServer((req, res)=>{
    res.setHeader("Content-Type","text/html");
    res.write("<h2> Hello ! INDIA </h2>");
    res.end();
})

server.listen(5000)