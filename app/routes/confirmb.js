import express, { application } from "express";
import { createconfirmb, getconfirmb ,deleteconfirmb,getconfirmbAll} from "../controllers/confirmb.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();

router.put("/",createconfirmb)
router.get("/",getconfirmbAll);


router.get("/:id",getconfirmb);
router.delete("/:id", deleteconfirmb);


export default router