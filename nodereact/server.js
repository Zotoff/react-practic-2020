const express = require('express');

const app = express();

app.get('/api/users', (req, res)=>{
    res.json([
        {
            name: 'Paul',
            lastname: 'Zotov'
        }
    ])
});

const port = process.env.PORT || 3001;

app.listen(port);