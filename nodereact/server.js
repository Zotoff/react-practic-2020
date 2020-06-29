const express = require('express');
const {MongoClient} = require('mongodb');
const app = express();
const bodyParser = require('body-parser');

// Grabbing the data from the page
app.use(bodyParser.json());

const mongoose = require('mongoose');


/*Without Mongoose*/

// const url = 'mongodb://localhost:27017';

// app.get('/api/users', async (req, res)=>{

//     /*JSON DATA*/

//     // res.json([
//     //     {
//     //         name: 'Paul',
//     //         lastname: 'Zotov'
//     //     }
//     // ])

//     /*Single data*/
   
//     MongoClient.connect(url,{useUnifiedTopology: true},(err, client)=>{
//             client.db('Cars').collection('items').insertOne({
//                 model: "Ford",
//                 year: 2017
//             },(err, res)=>{
//                 if(err){
//                     console.log(`ERROR: ${err}`)
//                 } else {
//                     console.log(`RESPONSE: ${res}`)
//                 }
//             });
//             //client.close();
//     })
// });

/*Multiple data*/
    // const cars = [
    //     {name: "Ford", year: 2019},
    //     {name: "Mazda", year: 2010}
    // ];
    // app.get('/api/users', (req, res)=>{
    //     MongoClient.connect(url, {useUnifiedTopology: true}, (err, client)=>{
    //         if(err){
    //             console.log('Connection error')
    //         } else {
    //             console.log('Connection success');
    //             client.db('Cars').collection('items').insert(cars,(err, res)=>{
    //                 if(err) {
    //                     return console.log(`Error: ${err}`)
    //                 } else {
    //                     console.log(res);
    //                 }
    //             })
    //             client.close();
    //         }
            
    //     })
    // })

/*Getting the info*/

// app.get('/api/find', (req, res)=>{
//     MongoClient.connect(url, {useUnifiedTopology:true}, (err, client)=>{
//         /*Simple Find*/

//         // client.db('Cars').collection('items').find().toArray()
//         // .then((data)=>{
//         //     console.log(data)
//         // })

//         /*Ordered find with limit*/
//         // client.db('Cars').collection('items').find().limit(2).toArray((err, docs)=>{
//         //     console.log(docs);
//         // })

//         /*Ordered find with skip*/
//         client.db('Cars').collection('items').find().skip(1).toArray((err, docs)=>{
//             console.log(docs);
//         })

//         client.close()
//     })
// });

/*With Mongoose*/
mongoose.connect('mongodb://localhost:27017/App', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*Create Schema and Model*/
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.model('Car', carSchema);

/*Performing the post request*/
app.post('/api/addcar', (req, res)=>{
    const addCar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        avail: req.body.avail
    })

    addCar.save((err, doc)=>{
        if(err) return console.log(err);
        res.sendStatus(200);
    })
});

/*Performing the get*/
app.get('/api/getcars', (req, res)=>{
    Car.find((err, doc)=>{
        if(err) return console.log(err);
        res.json(doc);
    })
})

/*Get with params*/
// app.get('/api/getcars', (req, res)=>{
//     Car.find({brand: 'Ford'},(err, doc)=>{
//         if(err) return console.log(err);
//         res.json(doc);
//     })
// })

// app.get('/api/getcars', (req, res)=>{
//     Car.findbyId('3434r5tfsfsdfsr4534',(err, doc)=>{
//         if(err) return console.log(err);
//         res.json(doc);
//     })
// })

/*Delete cars*/
app.post('/api/removecar', (req, res)=>{
    const brand = req.body.brand;
    Car.findOneAndRemove({brand: brand}, (err, doc)=>{
        if(err) return console.log(err);
        res.json(doc);
    });

    /*Remove by id*/
    // const id = req.body.id;
    // Car.findByIdAndRemove({_id: id}, (err, doc)=>{
    //     if(err) return console.log(err);
    //     res.json(doc);
    // })

    /*Bulk remove by prop*/
    // const brand = req.body.brand;
    // Car.remove({brand: brand}, (err, doc)=>{
    //     if(err) return console.log(err);
    //     res.json(doc);
    // })

})

/*Update cars*/
app.post('/api/updatecar', (req, res)=>{
    const id = req.body.id;
    const brand = req.body.brand;
    
    Car.update({_id: id}, {$set: {
        brand: brand
    }},(err,doc)=>{
        if(err) return console.log(err);
        res.json(doc)
    })

    // Car.findByIdAndUpdate({_id: id}, {$set: {
    //     brand: brand
    // }},(err,doc)=>{
    //     if(err) return console.log(err);
    //     res.json(doc)
    // })

    /*Iteraction with the document*/
    // Car.findById(id, (err, car)=>{
    //     if(err) return console.log(err);

    //     car.set({
    //         brand: brand
    //     });
    //     car.save((err, doc)=>{
            //     if(err) return console.log(err);
            //     res.json(doc)
            // });
    // })

})


const port = process.env.PORT || 3001;

app.listen(port);