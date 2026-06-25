require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const jobRoutes = require('./routes/jobRoutes.js');
const cookieParser = require('cookie-parser');
connectDB();

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is runnign on ${process.env.PORT}`);
});


