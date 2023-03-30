import { Router } from "express";
import Ride from "../models/ineed.js";
import Give from "../models/uneed.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const router = Router();

// router.get("/", async (req, res) => {
//     res.send("AUTH API");
// });




router.post("/ineedride", async (req, res) => {
  const { pickuplocation,droplocation,uname } = req.body;

  try {
    
    const user = await Ride.create({
      
      uname: uname,
      pickuplocation:pickuplocation,
      droplocation:droplocation
      
      
    });
    
    

    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
