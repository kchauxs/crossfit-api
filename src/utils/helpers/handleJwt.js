import jwt from "jsonwebtoken";

export const generateToken = (member) => {
  const expiresIn = "15m";
  const token = jwt.sign(member, process.env.JWT_SECURE, { expiresIn });
  return { token, expiresIn };
};

export const generateRefreshToken = (member, res) => {
  try {
    const expiresIn = "7d";
    const expires = new Date(Date.now() + 7 * 60 * 60 * 1000);
    const refreshToken = jwt.sign(member, process.env.JWT_SECURE_REFRESH, {
      expiresIn,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: !(process.env.NODE_ENV === "developer"),
      expires: expires,
    });
  } catch (error) {
    throw error;
  }
};

export const verifyToken = (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, process.env.JWT_SECURE);
  } catch (error) {
    throw error;
  }
};

export const verifyTokenToRefresh = (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, process.env.JWT_SECURE_REFRESH);
  } catch (error) {
    throw error;
  }
};

export default {
  verifyToken,
  generateToken,
  generateRefreshToken,
  verifyTokenToRefresh,
};
