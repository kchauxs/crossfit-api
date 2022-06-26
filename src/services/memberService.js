import MemberModel from "../models/memberModel.js";

const getAllMembers = async (filterParams) => {
  try {
    const allMembers = await MemberModel.find(filterParams);
    return allMembers;
  } catch (error) {
    throw error;
  }
};

const getOneMember = async (memberId) => {
  try {
    const member = await MemberModel.finOne(memberId);
    return member;
  } catch (error) {
    throw error;
  }
};

const createNewMember = async (newMember) => {
  try {
    const createdMember = await MemberModel.create(newMember);
    return createdMember;
  } catch (error) {
    throw error;
  }
};

const updateOneMember = async (memberId, changes) => {
  try {
    const updatedMember = await MemberModel.updateOne(memberId, changes);
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
    await MemberModel.retore(memberId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMembers,
  getOneMember,
  createNewMember,
  updateOneMember,
  deleteOneMember,
  retoreOneMember,
};
