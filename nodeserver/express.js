const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({extemded: false});
const fs = require('fs');

app.use('/css', express.static(__dirname + '/public/css')); // middleware 1
app.use('/', function(req, res, next){ // Middleware is running on all of the routes and before
    console.log(`Someone made a request to ${req.url}`);
    next();
});
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" href="/css/style.css">
            </head>
            <body>
                    <h1>Check</h1>
            </body>
        </html>
    `)
});

app.get('/api/user', function(req, res){
    res.send({
        name: 'Frank',
        lastname: 'Zotov'
    })
});

app.get('/api/user/:id', function(req, res){
    let id = req.params.id;
    res.send(`
        <html>
            <body>
                <h1>Hello, user ${id}</h1>
            </body>
        </html>
    `)
});

app.get('/api/car', function(req, res){
    let brand = req.query.brand;
    let year = req.query.year;
    res.send(`
        <html>
            <body>
                <h1>Hello, your car is model ${brand} and year is ${year}</h1>
            </body>
        </html>
    `)
});

app.get('/querystring', function(req, res){
    let HTML = fs.readFileSync(`${__dirname}/views/querystring.html`);
    res.send(`${HTML}`)
});


app.post('/api/queryadd', urlencodeParser, (req, res)=>{
    console.log(req.body);
    res.sendStatus(200);
});

app.post('/api/adduser/', (req, res)=>{
    console.log(req.body);
    res.sendStatus(200);
});

app.get('/adduser/', function(req, res){
    let HTML = fs.readFileSync(`${__dirname}/views/adduser.html`);
    res.send(`${HTML}`)
});


const port = process.env.PORT || 3000;

app.listen(port);