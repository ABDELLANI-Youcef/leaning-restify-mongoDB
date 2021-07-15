const mongoose = require('mongoose');
const restify = require('restify');

mongoose.connect('mongodb://127.0.0.1:27017/first_application',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log('MongoDB connected'));
