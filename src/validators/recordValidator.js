import { check } from "express-validator";
import { validateResults } from "../utils/helpers/handleValidator.js";

const validateCreateRecord = [
  check("workout").exists().notEmpty().isMongoId(),
  check("record").exists().notEmpty().isString().trim(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateUpdateRecord = [
  check("recordId").exists().notEmpty().isMongoId(),
  check("workout").exists().notEmpty().isMongoId(),
  check("record").exists().notEmpty().isString().trim(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateDeleteRecord = [
  check("recordId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

export default {
  validateCreateRecord,
  validateDeleteRecord,
  validateUpdateRecord,
};
