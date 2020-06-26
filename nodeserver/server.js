const http = require('http');
const fs = require('fs');

/*Plain text*/
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.end('Hello, i am a response');
// }).listen(8181,'127.0.0.1');

/*Plain HTML*/
// const server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.write(
//         `
//         <html>
//             <body>
//                 <h1>Hello world</h1>
//             </body>
//         </html>
//         `
//     )
//     res.end();
// });

/*File HTML*/
// let HTML = fs.readFileSync(`${__dirname}/index.html`);
// const server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.end(HTML);
// });

/*JSON DATA*/
// const names = ["francis", "james"];
// const cars = {
//     name: 'Ford',
//     model: 'Fiesta'
// }
//
//
// const server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'application/json'});
//     const json = JSON.stringify({
//         names,
//         cars
//     });
//     res.end(json);
// })

/*Routing*/
const server = http.createServer(function(req, res){
    if(req.url === "/"){
        let HTML = fs.readFileSync(`${__dirname}/index.html`);
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(HTML);
    } else if(req.url === "/api/user") {
        const names = ["francis", "james"];
        res.writeHead(200, {'Content-type': 'application/json'});
        const json = JSON.stringify({
            names
        });
        res.end(json);
    } else {
        res.writeHead(404);
        res.end();
    }
})

server.listen(8181, '127.0.0.1');
console.log('Server is listening');