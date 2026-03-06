import {Router} from "express";
import { getUserProfile } from "../controller/user";
const router = Router();

router.route("/profile").get(getUserProfile);


export default router;