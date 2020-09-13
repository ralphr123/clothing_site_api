import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    description: String,
    src: String,
    price: Number,
    widthCont: String,
    widthImage: String,
    widthButton: String,
    contClass: String,
    contId: String,
    demographic: String,
    productType: String
});

const Product = mongoose.model('Product', productSchema);

export default Product;