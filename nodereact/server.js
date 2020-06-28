const express = require('express');
const {MongoClient} = require('mongodb');
const app = express();

const url = 'mongodb://localhost:27017';




app.get('/api/users', (req, res)=>{
    // res.json([
    //     {
    //         name: 'Paul',
    //         lastname: 'Zotov'
    //     }
    // ])
    MongoClient.connect(url,{useUnifiedTopology: true},(err, client)=>{
        if(err){
            console.log('Error..')
        } else {
            client.db('Cars').collection('items').insertOne({
                model: "Ford",
                year: 2017
            })
        }
        client.close();
    })
});

const port = process.env.PORT || 3001;

app.listen(port);