const express = require('express');
const {MongoClient} = require('mongodb');

const uri = 'mongodb+srv://admin:z7smF6FSPaP06LJf@clothingsite.b0csd.mongodb.net/siteData?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;
const app = express();

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });   

app.get('/', (req, res) => {
    res.send("This works");
});

async function printData(res, type) {
    try {
        let productData = await client.db("siteData").collection("products").find({ productType: type }).toArray();
        res.send(productData);
    } catch (e) {
        console.error(e);
    }
}
client.connect(err => {
    app.get('/:productType', (req, res) => {
        printData(res, req.params.productType).catch(e => {
            console.log(e);
        });
    });
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// const insertManyProducts = (data) => {
//     try {
//         models.Product.collection.insertMany(data);
//     } catch (e) {
//         console.log(e);
//     }
// }