// import createHttpError from 'http-errors';
// import createError from 'http-errors';

const validator = (schema) => (req, res, next) => {
  const validation = schema.validate(req.body, { abortEarly: true })
  
  if (validation.error) {
    console.log(validation.error);
    // createError(400, validation.error.details[0].message);
    return res.status(400).json(validation.error);
    // return res.status(400).json({
    //   success: false,
    //   error: validation.error.details[0].message
    // });
  }
  return next()
}

export default validator;