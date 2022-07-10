import MemberModel from "../models/memberModel.js";

const getAllMembers = async (filterParams) => {
  try {
    const allMembers = await MemberModel.find(filterParams).select("-password");
    return allMembers;
  } catch (error) {
    throw error;
  }
};

const getOneMember = async (filterParams) => {
  try {
    const member = await MemberModel.findOne(filterParams);
    return member;
  } catch (error) {
    throw error;
  }
};

const createMember = async (newMember) => {
  try {
    const createdMember = await MemberModel.create(newMember);
    return createdMember;
  } catch (error) {
    throw error;
  }
};

const updateOneMember = async (filterParams, changes) => {
  try {
    const updatedMember = await MemberModel.updateOne(filterParams, changes);
    return updatedMember;
  } catch (error) {
    throw error;
  }
};

const deleteOneMember = async (memberId) => {
  try {
    await MemberModel.delete(memberId);
  } catch (error) {
    throw error;
  }
};

const retoreOneMember = async (memberId) => {
  try {
    const restoreMember = await MemberModel.restore(memberId);
    return restoreMember;
  } catch (error) {
    throw error;
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
