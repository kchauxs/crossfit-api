import apicache from "apicache";
import { Router } from "express";
import { authentication } from "../../middlewares/authentication.js";
import { authorization } from "../../middlewares/authorization.js";
import workoutController from "../../controllers/workoutController.js";
import workoutValidator from "../../validators/workoutValidator.js";
import recordController from "../../controllers/recordController.js";

const router = Router();
const cache = apicache.middleware;

router.get("/", cache("1 minutes"), workoutController.getAllWorkouts);
router.get(
  "/:workoutId",
  workoutValidator.validateGetOneWorkout,
  workoutController.getOneWorkout
);
router.get(
  "/:workoutId/records",
  workoutValidator.validateGetRecordsForWorkout,
  recordController.getRecordsForWorkout
);
router.post(
  "/",
  authentication,
  authorization("admin"),
  workoutValidator.validateCreateWorkout,
  workoutController.createNewWorkout
);
router.patch(
  "/:workoutId",
  authentication,
  authorization("admin"),
  workoutValidator.validateUpdateWorkout,
  workoutController.updateOneWorkout
);
router.patch(
  "/restore/:nameWorkout",
  authentication,
  authorization("admin"),
  workoutValidator.validateRestoreWorkout,
  workoutController.retoreOneWorkout
);
router.delete(
  "/:workoutId",
  authentication,
  authorization("admin"),
  workoutValidator.validateDeleteWorkout,
  workoutController.deleteOneWorkout
);

export default router;
