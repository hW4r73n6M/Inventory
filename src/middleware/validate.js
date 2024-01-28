const validator = require('../_helpers/validate');
const saveInventory = (req, res, next) => {
    const validationRule = {                
        item: 'required|string',
        category: 'required|string',
        comments: 'required|string',
        description: 'required|string',
        discontinued: 'required|boolean',
        location: 'required|string',
        manufacture: 'required|string',
        stock_level: 'required|numeric',
        supplier: 'required|string',
      
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };

const saveSupplier = (req, res, next) => {
    const validationRule = {                
        company: 'required|string',
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|email',
        jobTitle: 'required|string',
        address: 'required|string',
        city: 'required|string',
        state: 'required|string',
      
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };

module.exports = {
  saveInventory,
  saveSupplier
};

