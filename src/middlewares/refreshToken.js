import handleJwt from "../utils/helpers/handleJwt.js";
import { handleHttpError } from "../utils/helpers/handleError.js";

const error = {
  code: 401,
  status: "FAILED",
  data: { error: "Token does not exist" },
};

export const verifyTokenToRefresh = (req, res, next) => {
  try {
    const refreshTokenCookie = req.cookies.refreshToken;

    if (!refreshTokenCookie) {
      handleHttpError(res, error);
      return;
    }
    const { userData } = handleJwt.verifyTokenToRefresh(refreshTokenCookie);
    req.userData = userData;
    next();
  } catch (error) {
    handleHttpError(res, error);
  }
};
