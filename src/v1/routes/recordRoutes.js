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
