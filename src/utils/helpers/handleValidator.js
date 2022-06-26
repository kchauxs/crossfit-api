import { validationResult } from "express-validator";

export const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ status: "FAILED", errors: error.array() });
  }
};
