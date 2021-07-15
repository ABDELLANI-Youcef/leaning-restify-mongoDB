const mongoose = require('mongoose');
const restify = require('restify');
const config = require('./config');

const server = restify.createServer();

// Middleware

server.use(restify.plugins.bodyParser());
server.listen(config.PORT, ()=>{
  mongoose.connect(config.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

const db = mongoose.connection;

db.on('error', (err)=>console.log(err))

db.once('open', ()=>{
  require('./routes/customers')(server);
  console.log(`Server started on port ${config.PORT}`);
})