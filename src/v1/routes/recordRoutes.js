import { Router } from "express";
import { authentication } from "../../middlewares/authentication.js";
import { authorization } from "../../middlewares/authorization.js";
import recordController from "../../controllers/recordController.js";
import recordValidator from "../../validators/recordValidator.js";

const router = Router();

router.get(
  "/",
  authentication,
  authorization("member"),
  recordController.getAllRecords
);

router.post(
  "/",
  authentication,
  authorization("member"),
  recordValidator.validateCreateRecord,
  recordController.createNewRecord
);

router.patch(
  "/:recordId",
  authentication,
  authorization("member"),
  recordValidator.validateUpdateRecord,
  recordController.updateOneRecord
);

router.delete(
  "/:recordId",
  authentication,
  authorization("member"),
  recordValidator.validateDeleteRecord,
  recordController.deleteOneRecord
);

export default router;

// router.get(
//   "/:memberId",
//   authentication,
//   authorization("admin"),
//   memberValidator.validateGetOneMember,
//   memberController.getOneMember
// );

// router.patch(
//   "/:memberId",
//   authentication,
//   authorization("admin", "member"),
//   memberValidator.validateUpdateMember,
//   memberController.updateOneMember
// );
// router.patch(
//   "/rostore/:email",
//   authentication,
//   authorization("admin"),
//   memberValidator.validateRestoreMember,
//   memberController.retoreOneMember
// );
// router.delete(
//   "/:memberId",
//   authentication,
//   authorization("admin"),
//   memberValidator.validateDeleteMember,
//   memberController.deleteOneMember
// );
// router.get("/:memberId/workouts", recordController.getRecordForWorkout);
