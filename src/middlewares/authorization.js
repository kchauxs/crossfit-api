import { handleHttpError } from "../utils/helpers/handleError.js";

export const authorization = (...roles) => {
  return (req, res, next) => {
    const { memberData } = req;
    if (!roles.includes(memberData.role)) {
      handleHttpError(res, {
        code: 401,
        status: "FAILED",
        data: { error: "Unauthorized to access this route" },
      });
      return;
    }
    next();
  };
};
