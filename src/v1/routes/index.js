import v1WorkoutRouter from "./workoutRoutes.js";

const routes = (app) => {
  app.use("/api/v1/workouts", v1WorkoutRouter);
};

export default { routes };
