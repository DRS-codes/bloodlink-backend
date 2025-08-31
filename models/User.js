const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // (we'll hash later)
    role: {
        type: String,
        enum: ['provider', 'needer'],
        required: true
    },
    // ✅ Only providers will use this
    locations: [{ type: String }]  // array of strings
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
