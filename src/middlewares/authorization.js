import { handleHttpError } from "../utils/helpers/handleError.js";

const error = {
  code: 401,
  status: "FAILED",
  data: { error: "Unauthorized to access this route" },
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    const { memberData } = req;
    if (!roles.includes(memberData.role)) {
      handleHttpError(res, error);
      return;
    }
    next();
  };
};
