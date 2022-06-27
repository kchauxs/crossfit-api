import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";
const { Schema, model } = mongoose;

const workoutSchema = new Schema(
  {
    name: { type: String, unique: true, required: [true] },
    mode: { type: String, required: [true] },
    equipment: { type: [String], required: [true] },
    exercises: { type: [String], required: [true] },
    trainerTips: { type: [String], required: [true] },
  },
  {
    timestamps: true,
    versionKey: false,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

workoutSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
const workoutModel = model("workout", workoutSchema);
export default workoutModel;
