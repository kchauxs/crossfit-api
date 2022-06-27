import { verifyToken } from "../utils/helpers/handleJwt.js";
import { handleHttpError } from "../utils/helpers/handleError.js";

export const authentication = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      handleHttpError(res, {
        code: 401,
        status: "FAILED",
        data: { error: "Authentication invalid" },
      });
      return;
    }

    const token = authHeader.split(" ")[1];
    const dataToken = verifyToken(token);

    if (!dataToken) {
      handleHttpError(res, {
        code: 401,
        status: "FAILED",
        data: { error: "Authentication invalid" },
      });
      return;
    }

    const { memberData } = dataToken;
    req.memberData = memberData;
    next();
  } catch (error) {
    handleHttpError(res, {
      code: 401,
      status: "FAILED",
      data: { error: "Authentication invalid" },
    });
  }
};
