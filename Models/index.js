const mongoose = require('mongoose');
 
const Product = require('./product.js');
const TeamMember = require('./team_member.js');

const connectDb = () => {
    let uri = 'mongodb+srv://admin:arJLg1hAduyXt3wI@clothingsite.b0csd.mongodb.net/siteData?retryWrites=true&w=majority';
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};
 
const models = { Product, TeamMember };
 
export { connectDb };
 
export default models;