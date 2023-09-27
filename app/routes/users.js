import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";

const router = express.Router();

router.get("/checkauthentication", (req,res,next)=>{
  res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})


//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);


export default router;
