const express = require('express');
const {MongoClient} = require('mongodb');

const uri = 'mongodb+srv://admin:zCzVtaAeRsQOYYj1@clothingsite.b0csd.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;
const app = express();

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });   

app.get('/', (req, res) => {
    res.send("This works");
});

async function sendData(res, type) {
    try {
        let productData = await client.db("siteData").collection("products").find({ productType: type }).toArray();
        // Allow all origins
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Credentials': true
        });
        res.end(JSON.stringify(productData));
    } catch (e) {
        console.error(e);
    }
}

client.connect(err => {
    if (err) {
        console.log(err)
    } else {
        app.get('/:productType', (req, res) => {
            sendData(res, req.params.productType);
        });
    }
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));