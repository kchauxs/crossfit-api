import WorkoutModel from "../models/workoutModel.js";

const getAllWorkouts = async (filterParams) => {
  try {
    const allWorkouts = await WorkoutModel.find(filterParams);
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

const getOneWorkout = async (workoutId) => {
  try {
    const workout = await WorkoutModel.finOne(workoutId);
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

const updateOneWorkout = async (workoutId, changes) => {
  try {
    const updatedWorkout = await WorkoutModel.updateOne(workoutId, changes);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkout = async (workoutId) => {
  try {
    await WorkoutModel.delete(workoutId);
  } catch (error) {
    throw error;
  }
};

const retoreOneWorkout = async (workoutId) => {
  try {
    await WorkoutModel.retore(workoutId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
  retoreOneWorkout,
};
