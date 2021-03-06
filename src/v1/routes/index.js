import v1AuthRoutes from "./authRoutes.js";
import v1MemberRoutes from "./memberRoutes.js";
import v1WorkoutRouter from "./workoutRoutes.js";
import v1RecordRouter from "./recordRoutes.js";

export const routes = (app) => {
  app.use("/api/v1/auth", v1AuthRoutes);
  app.use("/api/v1/members", v1MemberRoutes);
  app.use("/api/v1/workouts", v1WorkoutRouter);
  app.use("/api/v1/records", v1RecordRouter);
};
