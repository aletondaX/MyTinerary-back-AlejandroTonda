const validator = (schema) => (req, res, next) => {
  const validation = schema.validate(req.body, { abortEarly: true })
  
  if (validation.error) {
    console.log(validation.error);
    return res.status(400).json(validation.error);
  }
  return next()
}

export default validator;

// firstName: req.body.firstName,
// lastName: req.body.lastName,
// email: req.body.email,
// password: req.body.password,
// imgUrl: req.body.imgUrl,
// country: req.body.country