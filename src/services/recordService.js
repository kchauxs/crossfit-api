import RecordModel from "../models/recordModel.js";

const getRecordForWorkout = (filterParam) => {
  try {
    const record = RecordModel.findOne(filterParam);
    return record;
  } catch (error) {
    throw error;
  }
};

export default { getRecordForWorkout };
