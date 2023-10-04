import express, { application } from "express";
import { createcontact, getcontact } from "../controllers/contact.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

router.post("/",verifyAdmin,createcontact)


router.get("/",verifyAdmin,getcontact);

export default router