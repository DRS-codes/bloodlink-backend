const Blood = require('../models/Blood');

// Add new blood record
exports.addBlood = async (req, res) => {
    try {
        const blood = new Blood(req.body);
        await blood.save();
        res.status(201).json(blood);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all blood records
exports.getBlood = async (req, res) => {
    try {
        const bloodData = await Blood.find();
        res.json(bloodData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update blood record
exports.updateBlood = async (req, res) => {
    try {
        const blood = await Blood.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(blood);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete blood record
exports.deleteBlood = async (req, res) => {
    try {
        await Blood.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blood record deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
