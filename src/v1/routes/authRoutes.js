import { Router } from "express";
import { validateLogin } from "../../validators/authValidator.js";
import authController from "../../controllers/authController.js";
import { verifyTokenToRefresh } from "../../middlewares/refreshToken.js";

const router = Router();

router.get("/logout", authController.logout);
router.get("/resfresh", verifyTokenToRefresh, authController.refreshToken);
router.post("/login", validateLogin, authController.login);

export default router;
