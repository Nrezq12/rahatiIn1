import express, { application } from "express";
import { createconfirmb, getconfirmb ,deleteconfirmb} from "../controllers/confirmb.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();

router.put("/",createconfirmb)


router.get("/:id",getconfirmb);
router.delete("/:id", deleteconfirmb);


export default router