import { Router } from "express";
import { authentication } from "../../middlewares/authentication.js";
import { authorization } from "../../middlewares/authorization.js";
import memberController from "../../controllers/memberController.js";
import memberValidator from "../../validators/memberValidator.js";

const router = Router();

router.get(
  "/",
  authentication,
  authorization("admin"),
  memberController.getAllMembers
);
router.get(
  "/:memberId",
  authentication,
  authorization("admin"),
  memberValidator.validateGetOneMember,
  memberController.getOneMember
);
router.post(
  "/",
  memberValidator.validateCreateMember,
  memberController.createMember
);
router.patch(
  "/:memberId",
  authentication,
  authorization("admin", "member"),
  memberValidator.validateUpdateMember,
  memberController.updateOneMember
);
router.patch(
  "/rostore/:memberId",
  authentication,
  authorization("admin"),
  memberValidator.validateRestoreMember,
  memberController.retoreOneMember
);
router.delete(
  "/:memberId",
  authentication,
  authorization("admin"),
  memberValidator.validateDeleteMember,
  memberController.deleteOneMember
);
// router.get("/:memberId/workouts", recordController.getRecordForWorkout);
export default router;
