import RecordModel from "../models/recordModel.js";

const getAllRecords = (filterParam, options) => {
  try {
    const records = RecordModel.paginate(filterParam, options);
    return records;
  } catch (error) {
    throw error;
  }
};

const getRecordsForWorkout = (filterParam) => {
  try {
    const records = RecordModel.find(filterParam);
    return records;
  } catch (error) {
    throw error;
  }
};

const createNewRecord = async (newRecord) => {
  try {
    const createdRecord = await RecordModel.create(newRecord);
    return createdRecord;
  } catch (error) {
    throw error;
  }
};

const deleteOneRecord = async (filterParam) => {
  try {
    await RecordModel.deleteOne(filterParam);
  } catch (error) {
    throw error;
  }
};

const updateOneRecord = async (filterParams, changes) => {
  try {
    const updatedRecord = await RecordModel.updateOne(filterParams, changes);
    return updatedRecord;
  } catch (error) {
    throw error;
  }
};

export default {
  createNewRecord,
  deleteOneRecord,
  getAllRecords,
  getRecordsForWorkout,
  updateOneRecord,
};
