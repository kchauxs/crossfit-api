import { check } from "express-validator";
import { validateResults } from "../utils/helpers/handleValidator.js";

const validateCreateMember = [
  check("name").exists().notEmpty().isString().trim(),
  check("gender").exists().notEmpty().isString().trim(),
  check("dateOfBirth").exists().notEmpty().isString(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 6, max: 15 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateUpdateMember = [
  check("name").exists().notEmpty().isString().trim(),
  check("gender").exists().notEmpty().isString().trim(),
  check("dateOfBirth").exists().notEmpty().isDate(),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateGetOneMember = [
  check("memberId").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateRestoreMember = [
  check("memberId").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateDeleteMember = [
  check("memberId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validateUpdateMemberPassword = [
  check("oldPassword").exists().notEmpty().isLength({ min: 6, max: 15 }),
  check("newPassword")
    .exists()
    .notEmpty()
    .isLength({ min: 6, max: 15 })
    .isString(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

export default {
  validateCreateMember,
  validateUpdateMember,
  validateGetOneMember,
  validateRestoreMember,
  validateDeleteMember,
  validateUpdateMemberPassword,
};
