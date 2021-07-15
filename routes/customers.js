const errors = require('restify-errors');
const Customer = require('../models/Customer')

module.exports = (server) => {
  // Get Customers
  server.get('/customers', async (req, res,next)=>{
    try {
      const customers = await Customer.find({});
      res.send(customers);
      next();
    }
    catch (err){
      return next(new errors.InvalidContentError(err));
    }
  });

  // Get Single Customer
  server.get('/customers/:id', async (req, res,next)=>{
    try {
      const customer = await Customer.findById(req.params.id);
      res.send(customer);
      next();
    }
    catch (err){
      return next(new errors.ResourceNotFoundError(`There is no user with the id of ${req.params.id}`));
    }
  });

  // Add Customer
  server.post('/customers', async (req,res,next)=>{
    if (!req.is('application/json')){
      return next(new errors.InvalidContentError("Expects 'application/josn'"));
    }
    const {name, email, balance} = req.body;
    const customer = new Customer({name, email, balance});
    try {
      const newCustomer = customer.save();
      res.send(201);
      next();
    } catch (err) {
      return next(new errors.InternalError(err.message));
    }
  })
}