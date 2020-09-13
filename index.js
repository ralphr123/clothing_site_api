const express = require('express');
const {MongoClient} = require('mongodb');

const uri = 'mongodb+srv://admin:arJLg1hAduyXt3wI@clothingsite.b0csd.mongodb.net/siteData?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;
const app = express();

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });   

app.get('/', (req, res) => {
    res.send("This works");
});

async function connecter() {
    await client.connect();
}
connecter();

async function printData(res, type) {
    try {
        console.log(1);
        let productData = await client.db("siteData").collection("products").find({ productType: type }).toArray();
        console.log(2);
        res.send(productData);
        console.log(3);
    } catch (e) {
        console.error(e);
    }
}
app.get('/:productType', (req, res) => {
    printData(res, req.params.productType);
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// const insertManyProducts = (data) => {
//     try {
//         models.Product.collection.insertMany(data);
//     } catch (e) {
//         console.log(e);
//     }
// }