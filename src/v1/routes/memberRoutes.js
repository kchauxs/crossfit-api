import { Router } from "express";
import memberController from "../../controllers/memberController.js";
const router = Router();

router.get("/", memberController.getAllMembers);
router.get("/:memberId", memberController.getOneMember);
router.post("/", memberController.createNewMember);
router.patch("/:memberId", memberController.updateOneMember);
router.delete("/:memberId", memberController.deleteOneMember);
router.delete("/rostore/:memberId", memberController.retoreOneMember);
// router.get("/:memberId/workouts", recordController.getRecordForWorkout);

export default router;
