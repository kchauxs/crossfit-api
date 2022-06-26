import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const { Schema, model } = mongoose;

const recordSchema = new Schema(
  {
    workout: { type: Schema.Types.ObjectId, ref: "workout" },
    record: { type: String, required: [true] },
    memberId: { type: Schema.Types.ObjectId, ref: "member" },
    member: { type: String, default: "/members/:memberId" },
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

recordSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
const recordModel = model("record", recordSchema);
export default recordModel;
