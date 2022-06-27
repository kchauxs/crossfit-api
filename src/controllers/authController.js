import {
  generateToken,
  generateRefreshToken,
} from "../utils/helpers/handleJwt.js";
import { handleHttpError } from "../utils/helpers/handleError.js";
import { comparePassword } from "../utils/helpers/handlePassword.js";
import memberModel from "../services/memberService.js";

export const login = async (req, res) => {
  const { body } = req;
  try {
    const member = await memberModel.getOneMember({ email: body.email });
    if (!member) {
      res.status(404).send({
        status: "FAILED",
        data: { error: "Unregistered member" },
      });
      return;
    }
    const isPasswordCorrect = await comparePassword(
      body.password,
      member.password
    );
    if (!isPasswordCorrect) {
      res.status(401).send({
        status: "FAILED",
        data: { error: "Invalid Credentials" },
      });
      return;
    }
    const memberData = {
      _id: member._id,
      role: member.role,
    };
    const { token, expiresIn } = generateToken({ memberData });
    generateRefreshToken({ memberData }, res);
    const response = {
      token: token,
      expiresIn: expiresIn,
    };
    return res.status(200).send({ status: "OK", data: response });
  } catch (error) {
    handleHttpError(res, error);
  }
};

export const refreshToken = async (req, res) => {
  const { memberData } = req;
  try {
    const { token, expiresIn } = generateToken({ memberData });
    const response = {
      token: token,
      expiresIn: expiresIn,
    };
    return res.status(200).send({ status: "OK", data: response });
  } catch (error) {
    handleHttpError(res, error);
  }
};

export const logout = async (req, res) => {
  res.clearCookie("refreshToken");
  res.status(200).send({ status: "OK", logout: true });
};

export default {
  login,
  logout,
  refreshToken,
};
