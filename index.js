const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const bloodRoutes = require('./routes/bloodRoutes');
const userRoutes = require('./routes/userRoutes');
const bloodRequestRoutes = require('./routes/bloodRequestRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/blood', bloodRoutes);
app.use('/api/users', userRoutes);
app.use('/api/blood', bloodRequestRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Welcome to Blood Link');
        app.listen(process.env.PORT || 5000, () => {
            console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch(err => console.error(err));
