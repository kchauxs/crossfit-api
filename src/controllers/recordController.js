import recordService from "../services/recordService.js";
import { handleHttpError } from "../utils/helpers/handleError.js";

const createNewRecord = async (req, res) => {
  try {
    const { body, memberData } = req;
    const newRecord = {
      memberId: memberData._id,
      workout: body.workout,
      record: body.record,
    };
    const createdRecord = await recordService.createNewRecord(newRecord);
    res.status(201).send({ status: "OK", data: createdRecord });
  } catch (error) {
    handleHttpError(res, error);
  }
};

const getAllRecords = async (req, res) => {
  try {
    const {
      memberData: { _id: memberId },
    } = req;
    const { limit = 20, page = 1, sort = 1 } = req.query;
    const options = {
      limit: limit,
      page: page,
      sort: { createdAt: sort },
    };
    const record = await recordService.getAllRecords({ memberId }, options);
    res.send({ status: "OK", data: record });
  } catch (error) {
    handleHttpError(res, error);
  }
};

const getRecordsForWorkout = async (req, res) => {
  try {
    const {
      params: { workoutId },
    } = req;
    const record = await recordService.getRecordsForWorkout({
      workout: workoutId,
    });
    res.send({ status: "OK", data: record });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};


const updateOneRecord = async (req, res) => {
  try {
    const {
      body,
      params: { recordId },
    } = req;
    await recordService.updateOneRecord({ _id: recordId }, body);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    handleHttpError(res, error);
  }
};


const deleteOneRecord = async (req, res) => {
  try {
    const { recordId } = req.params;
    await recordService.deleteOneRecord({ _id: recordId });
    res.status(204).send({ status: "OK" });
  } catch (error) {
    handleHttpError(res, error);
  }
};

export default {
  createNewRecord,
  getAllRecords,
  getRecordsForWorkout,
  updateOneRecord,
  deleteOneRecord,
};
