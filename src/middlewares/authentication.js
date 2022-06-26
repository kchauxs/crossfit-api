import { verifyToken } from "../utils/helpers/handleJwt.js";
import { handleHttpError } from "../utils/helpers/handleError.js";

const error = {
  code: 401,
  status: "FAILED",
  data: { error: "Authentication invalid" },
};

export const authenticateUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      handleHttpError(res, error);
      return;
    }

    const token = authHeader.split(" ")[1];
    const dataToken = verifyToken(token);

    if (!dataToken) {
      handleHttpError(res, error);
      return;
    }

    const { memberData } = dataToken;
    req.memberData = memberData;
    next();
  } catch (error) {
    handleHttpError(res, error);
  }
};
