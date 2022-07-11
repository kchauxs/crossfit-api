import { check } from "express-validator";
import { validateResults } from "../utils/helpers/handleValidator.js";

const validateCreateWorkout = [
  check("name").exists().notEmpty().isString().trim(),
  check("mode").exists().notEmpty().isString().trim(),
  check("equipment").exists().notEmpty().isArray(),
  check("equipment.*").isString(),
  check("exercises").exists().notEmpty().isArray(),
  check("exercises.*").isString(),
  check("trainerTips").exists().notEmpty().isArray(),
  check("trainerTips.*").isString(),

  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateUpdateWorkout = [
  check("workoutId").exists().notEmpty().isMongoId(),
  check("name").exists().notEmpty().isString().trim(),
  check("mode").exists().notEmpty().isString().trim(),
  check("equipment").exists().notEmpty().isArray(),
  check("equipment.*").isString(),
  check("exercises").exists().notEmpty().isArray(),
  check("exercises.*").isString(),
  check("trainerTips").exists().notEmpty().isArray(),
  check("trainerTips.*").isString(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateGetOneWorkout = [
  check("workoutId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];
const validateGetRecordsForWorkout = [
  check("workoutId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateRestoreWorkout = [
  check("nameWorkout").exists().notEmpty().isString(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateDeleteWorkout = [
  check("workoutId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

export default {
  validateCreateWorkout,
  validateUpdateWorkout,
  validateGetOneWorkout,
  validateGetRecordsForWorkout,
  validateRestoreWorkout,
  validateDeleteWorkout,
};
