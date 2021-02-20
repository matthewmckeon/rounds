const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config({ path: 'config.env' });
const roundRouter = require('./routes/roundRoutes');

// CONNECT DATABASE
mongoose
  .connect(process.env.DATABASE, {
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
