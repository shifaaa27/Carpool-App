import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();


// router.get("/", async (req, res) => {
//     res.send("AUTH API");
// });

router.get("/", async(req, res) => {
  const user = await User.find();
  if (!user) {
    res.status(404).json({message: "No users found"});
  } else {
    res.status(200).json(user);
  }
})

router.get("/:rno", async (req, res) => {
  const user = await User.findOne({rno: req.params.rno});
  if (!user) {
    res.status(404).json({ message: "User not found" });
    } else {
        res.status(200).json(user);
    }
})

router.post("/", async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        res.status(200).json(user);
    }
});

router.delete("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        res.status(200).json(user);
    }
});

router.post("/register", async (req, res) => {
    const { name,pass,rno,vno,uname,cno } = req.body;
    
    try {
      const salt = bcrypt.genSaltSync(10)
      console.log("pass",pass)
      const user = await User.create({ 
        rno: rno,
        name:name,
        pass:bcrypt.hashSync(pass,salt),
        vno:vno,
        uname:uname,
        cno:cno

      });

      res.status(201).send(user)
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });

export default router;