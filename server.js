const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config({ path: 'config.env' });
const roundRouter = require('./routes/roundRoutes');

// Create db variable with data from .env
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

// CONNECT DATABASE
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(console.log('Database connection successful!'))
  .catch((err) => console.log(err));

// initialize app
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/rounds', roundRouter);

// START APP
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
