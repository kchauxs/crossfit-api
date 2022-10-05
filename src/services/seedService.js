import MemberModel from "../models/memberModel.js";
import RecordModel from "../models/recordModel.js";
import WorkoutModel from "../models/workoutModel.js";
import seedData from "../database/seed-data.js";
import { encryptPassword } from "../utils/helpers/handlePassword.js";

const deleteDocuments = async () => {
  try {
    await RecordModel.deleteMany();
    await WorkoutModel.deleteMany();
    await MemberModel.deleteMany();
  } catch (error) {
    throw error;
  }
};

const insertMembers = async () => {
  try {
    const seedMembers = seedData.members;
    seedMembers.forEach(async (member) => {
      member.password = await encryptPassword(member.password);
      await MemberModel.create(member);
    });
  } catch (error) {
    throw error;
  }
};

const insertWorkouts = async () => {
  try {
    const seedWorkouts = seedData.workouts;
    seedWorkouts.forEach(async (workout) => {
      await WorkoutModel.create(workout);
    });
  } catch (error) {
    throw error;
  }
};

const insertRecords = async () => {
  try {
    const recordMembers = seedData.records;
    recordMembers.forEach(async (record) => {
      await RecordModel.create(record);
    });
  } catch (error) {
    throw error;
  }
};

const insertDocuments = async () => {
  try {
    await insertMembers();
    await insertWorkouts();
    await insertRecords();
  } catch (error) {
    throw error;
  }
};

const runSeed = async () => {
  try {
    await deleteDocuments();
    await insertDocuments();
    return "SEED EXECUTED";
  } catch (error) {
    throw error;
  }
};

export default {
  runSeed,
};
