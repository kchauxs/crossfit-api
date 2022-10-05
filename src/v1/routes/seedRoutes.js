import { Router } from "express";
import seedController from "../../controllers/seedController.js";

const router = Router();
router.get("/", seedController.runSeed);
export default router;
