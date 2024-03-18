const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const customerRouter = require('./route/customerRoute');
const userRouter = require('./route/userRoute')

const app = express();

// Apply CORS middleware
app.use(cors());

// Parse JSON request bodies
app.use(bodyparser.json());

// Use customer routes
app.use(customerRouter);
app.use(userRouter);

const PORT = 8080;

const URL='mongodb+srv://dsms:dsms2002@mymernapp.vrk6nfg.mongodb.net/myMernProject?retryWrites=true&w=majority&appName=myMernApp';

mongoose.connect(URL)
  .then(() => {
    console.log("DB Connected")
  })
  .catch((err) => console.log('DB Connection error', err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
