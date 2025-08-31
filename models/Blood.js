const mongoose = require('mongoose');

const bloodSchema = new mongoose.Schema({
    bloodType: { type: String, required: true }, // A+, O-, etc.
    quantity: { type: Number, required: true },
    institution: { type: String, required: true },
    location: { type: String, required: true },
    available: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Blood', bloodSchema);
