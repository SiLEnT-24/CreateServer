import { createServer } from 'http';

const age= 20;
const server = createServer((req, res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
         <html>
            <head>
               <title>My Server</title>
            </head>
            <body>
                 <h1>Hello, World! INDIA</h1>
                 <p>leonardo de caprio</p>
                 <h3>My age is ${age}</h3>
                 <h3>`+new Date()+`</h3>
            </body>
         </html>
        `);
    res.end();
})

server.listen(5000)

// current respone ko end karne ke liye res.end() ka use kiya hai.
// process.exit() ka use karne se server band ho jata hai aur response bhi end ho jata hai.