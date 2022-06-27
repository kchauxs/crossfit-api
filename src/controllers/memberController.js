import memberService from "../services/memberService.js";
import { handleHttpError } from "../utils/helpers/handleError.js";
import { encryptPassword } from "../utils/helpers/handlePassword.js";

const getAllMembers = async (req, res) => {
  try {
    const query = req.query;
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
  try {
    const { memberId } = req.params;
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
  try {
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
  try {
    const {
      body,
      params: { memberId },
    } = req;
    const updatedMember = await memberService.updateOneMember(
      { _id: memberId },
      body
    );
    res.send({ status: "OK", data: updatedMember });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneMember = async (req, res) => {
  try {
    const { memberId } = req.params;
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
  try {
    const { memberId } = req.params;
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
