const validateNonEmptyBody = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "Validation failed",
      errors: [
        {
          msg: "Request body cannot be empty",
        },
      ],
    });
  }
  next();
};

export default validateNonEmptyBody;
