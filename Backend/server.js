require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const cookieParser = require('cookie-parser');
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is runnign on ${process.env.PORT}`);
});


