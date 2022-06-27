import memberService from "../services/memberService.js";
import { handleHttpError } from "../utils/helpers/handleError.js";
import { encryptPassword } from "../utils/helpers/handlePassword.js";

const getAllMembers = async (req, res) => {
  const query = req.query;
  try {
    const allMembers = await memberService.getAllMembers({ ...query });
    res.send({ status: "OK", data: allMembers });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneMember = async (req, res) => {
  const { memberId } = req.params;
  try {
    const member = await memberService.getOneMember({ _id: memberId });
    res.send({ status: "OK", data: member });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createMember = async (req, res) => {
  const { body } = req;
  const passwordEncrypt = await encryptPassword(body.password);
  const newMember = {
    name: body.name,
    gender: body.gender,
    dateOfBirth: body.dateOfBirth,
    email: body.email,
    password: passwordEncrypt,
    role: body.role,
  };
  try {
    const createdMember = await memberService.createMember(newMember);
    createdMember.set("password", undefined, { strict: false });
    res.status(201).send({ status: "OK", data: createdMember });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneMember = async (req, res) => {
  const {
    body,
    params: { memberId },
  } = req;
  try {
    const updatedMember = await memberService.updateOneMember(memberId, body);
    res.send({ status: "OK", data: updatedMember });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneMember = async (req, res) => {
  const { memberId } = req.params;
  try {
    await memberService.deleteOneMember({ _id: memberId });
    res.status(204).send({ status: "OK" });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const retoreOneMember = async (req, res) => {
  const { memberId } = req.params;
  try {
    await memberService.retoreOneMember({ _id: memberId });
    res.status(204).send({ status: "OK" });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export default {
  getAllMembers,
  getOneMember,
  createMember,
  updateOneMember,
  deleteOneMember,
  retoreOneMember,
};
