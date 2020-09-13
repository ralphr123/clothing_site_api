import mongoose from 'mongoose';
 
import Product from './product.js';
import TeamMember from './team_member.js';

const connectDb = () => {
    let uri = 'mongodb+srv://admin:arJLg1hAduyXt3wI@clothingsite.b0csd.mongodb.net/siteData?retryWrites=true&w=majority';
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};
 
const models = { Product, TeamMember };
 
export { connectDb };
 
export default models;