import workoutService from "../services/workoutService.js";
import { handleHttpError } from "../utils/helpers/handleError.js";

const getAllWorkouts = async (req, res) => {
  try {
    const query = req.query;
    const allWorkouts = await workoutService.getAllWorkouts({ ...query });
    res.send({ status: "OK", data: allWorkouts });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneWorkout = async (req, res) => {
  try {
    const { workoutId } = req.params;
    const workout = await workoutService.getOneWorkout({ _id: workoutId });
    res.send({ status: "OK", data: workout });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewWorkout = async (req, res) => {
  try {
    const { body } = req;
    const newWorkout = {
      name: body.name,
      mode: body.mode,
      equipment: body.equipment,
      exercises: body.exercises,
      trainerTips: body.trainerTips,
    };
    const createdWorkout = await workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneWorkout = async (req, res) => {
  try {
    const {
      body,
      params: { workoutId },
    } = req;
    const updatedWorkout = await workoutService.updateOneWorkout(
      { _id: workoutId },
      body
    );
    res.send({ status: "OK", data: updatedWorkout });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneWorkout = async (req, res) => {
  try {
    const {
      params: { workoutId },
    } = req;
    await workoutService.deleteOneWorkout({ _id: workoutId });
    res.status(204).send({ status: "OK" });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const retoreOneWorkout = async (req, res) => {
  try {
    const { nameWorkout } = req.params;
    await workoutService.retoreOneWorkout({ name: nameWorkout });
    res.status(204).send({ status: "OK" });
  } catch (error) {
    handleHttpError(res, error);
    // res
    //   .status(error?.status || 500)
    //   .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
  retoreOneWorkout,
};
