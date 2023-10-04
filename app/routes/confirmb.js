import express, { application } from "express";
import { createconfirmb, getconfirmb } from "../controllers/confirmb.js";



const router=express.Router();

router.post("/",createconfirmb)


router.get("/",getconfirmb);

export default router