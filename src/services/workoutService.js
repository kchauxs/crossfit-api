import WorkoutModel from "../models/workoutModel.js";

const getAllWorkouts = async (filterParam, options) => {
  try {
    const allWorkouts = await WorkoutModel.paginate(filterParam, options);
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

const getOneWorkout = async (filterParams) => {
  try {
    const workout = await WorkoutModel.findOne(filterParams);
    return workout;
  } catch (error) {
    throw error;
  }
};

const createNewWorkout = async (newWorkout) => {
  try {
    const createdWorkout = await WorkoutModel.create(newWorkout);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = async (filterParams, changes) => {
  try {
    const updatedWorkout = await WorkoutModel.updateOne(filterParams, changes);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkout = async (filterParams) => {
  try {
    await WorkoutModel.delete(filterParams);
  } catch (error) {
    throw error;
  }
};

const retoreOneWorkout = async (filterParams) => {
  try {
    await WorkoutModel.restore(filterParams);
  } catch (error) {
    throw error;
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
