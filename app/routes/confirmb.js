import express, { application } from "express";
import { createconfirmb, getConfirmb ,deleteconfirmb,getconfirmbAll} from "../controllers/confirmb.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();

router.put("/",createconfirmb)
router.get("/",getconfirmbAll);


router.get("/:id",getConfirmb);
router.delete("/:id", deleteconfirmb);


export default router