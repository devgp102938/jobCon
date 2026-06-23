require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes.js')
connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is runnign on ${process.env.PORT}`);
});


