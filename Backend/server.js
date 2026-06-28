require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const jobRoutes = require('./routes/jobRoutes.js');
const contactRoute = require('./routes/contactRoutes.js');
const applicationRoute = require('./routes/applicationRoutes.js');
const errorMiddlware = require('./middleware/errorMiddleware.js');
const cookieParser = require('cookie-parser');
connectDB();

app.use(cors({
    origin : "https://job-con-umber.vercel.app/",
    credentials : true
}))

app.use(express.json());
app.use(cookieParser());



app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/contact', contactRoute);
app.use('/api/application', applicationRoute);

app.use(errorMiddlware);

app.listen(process.env.PORT, () => {
    console.log(`Server is runnign on ${process.env.PORT}`);
});


