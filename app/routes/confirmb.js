import express, { application } from "express";
import { createconfirmb, getconfirmb } from "../controllers/confirmb.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();

router.post("/",verifyAdmin,createconfirmb)


router.get("/",verifyAdmin,getconfirmb);

export default router