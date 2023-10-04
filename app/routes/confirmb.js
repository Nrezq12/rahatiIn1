import express, { application } from "express";
import { createconfirmb, getconfirmb } from "../controllers/confirmb.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();

router.put("/",createconfirmb)


router.get("/",getconfirmb);

export default router