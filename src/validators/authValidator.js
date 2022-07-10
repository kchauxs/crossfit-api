import { check } from "express-validator";
import { validateResults } from "../utils/helpers/handleValidator.js";

export const validateLogin = [
  check("password")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 6, max: 15 }),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];
