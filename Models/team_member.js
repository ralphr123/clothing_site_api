import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
    id: Number,
    name: String,
    jobTitle: Number,
    shortDescription: String,
    fullDescription: String,
    src: String
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

export default TeamMember;