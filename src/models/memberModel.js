import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const { Schema, model } = mongoose;
const adminRole = process.env.ADMIN_ROLE;
const memberSchema = new Schema(
  {
    name: { type: String, required: [true] },
    gender: { type: String, required: [true] },
    dateOfBirth: { type: String, required: [true] },
    email: { type: String, unique: true, required: [true] },
    password: { type: String, required: [true] },
    role: {
      type: String,
      enum: [adminRole, "member"],
      default: "member",
    },
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

memberSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
const membertModel = model("member", memberSchema);
export default membertModel;
