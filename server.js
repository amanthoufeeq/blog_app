const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require("cors");

dotenv.config();

const authRoutes = require('./routes/authRoutes');

const app = express();

// ! DB Connection
mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
}).then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// ! Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


app.use('/api', authRoutes);

app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
}
);