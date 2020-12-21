const mongoose = require("mongoose");
require('dotenv/config');

const dbConfig = "mongodb+srv://user:Password9@cluster0.ejr4c.mongodb.net/workout?retryWrites=true&w=majority";


async function connectDB(){
  await mongoose.connect(dbConfig,{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
  }, () =>  
  console.log("Connected to DB")
);
}


module.exports = connectDB;