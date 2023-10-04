import express, { application } from "express";
import { createcontact, getcontact } from "../controllers/contact.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

router.post("/",createcontact)


router.get("/",getcontact);

export default router