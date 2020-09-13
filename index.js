const express = require('express');
const {MongoClient} = require('mongodb');
// const mongoose = require('mongoose');
// const models = require('./Models/index.js');

const uri = 'mongodb+srv://admin:arJLg1hAduyXt3wI@clothingsite.b0csd.mongodb.net/siteData?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;
const app = express();

// connectDb;

async function main(){    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });   
    try {
        await client.connect();

        let productData = await client.db("siteData").collection("products").find().toArray();
        
        app.get('/apparel', (req, res) => {
            let apparelData = productData.filter(doc => doc.productType === "apparel");

            res.send(apparelData);
        });
        
        app.get('/shoes', (req, res) => {
            let shoeData = productData.filter(doc => doc.productType === "shoes");

            res.send(shoeData);
        });
        
        app.get('/accessories', (req, res) => {
            let accessoryData = productData.filter(doc => doc.productType === "accessories");

            res.send(accessoryData);
        });
        
        app.get('/collections', (req, res) => {
            let collectionData = productData.filter(doc => doc.productType === "collections");

            res.send(collectionData);
        });
        
        app.get('/lifestyle', (req, res) => {
            let lifestyleData = productData.filter(doc => doc.productType === "lifestyle");

            res.send(lifestyleData);
        });

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

app.get('/', (req, res) => {
    res.send("hello there babay lolzies");
});

main().catch(console.error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// const insertManyProducts = (data) => {
//     try {
//         models.Product.collection.insertMany(data);
//     } catch (e) {
//         console.log(e);
//     }
// }