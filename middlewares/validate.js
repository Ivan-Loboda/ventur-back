const Joi = require("joi");

module.exports = {
  addPostValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      phone: Joi.string().required(),
      debtName: Joi.string().min(2).max(50).required(),
      amount: Joi.number().required(),
      rate: Joi.number().required(),
      minPayment: Joi.number().required()
  });

  const validationResult = schema.validate(req.body);
  if(validationResult.error) {
  return res.status(400).json({ message: validationResult.error.details });
}
next();
  },
};
