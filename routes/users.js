const express = require("express");
const router = express.Router();
const User = require("../models/User");


router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users: users, status: true });
    return;
  } catch (err) {
    res.json({ message: err, status: false });
    return;
  }
});

router.post("/", async (req, res) => {
  const { userName, password } = req.body;

  const user = new User({
    userName: userName,
    password: password
  });

  try {
    const savedUser = await user.save();
    res.json({savedUser: savedUser, status: true});
    return;
  } catch (err) {
    res.json({ message: err, status: false });
    return;
  }
});

router.get('/:userId', async (req, res) => {
    try{
        const { userId } = req.params;
        console.log(userId)
        const foundUser = await User.findById(userId);
        res.json({user: foundUser, status: true});
        return;
    } catch (err) {
        res.json({message: err, status: false});
        return;
    }

    
})

router.delete('/:userId', async (req, res) => {

    try {
        const { userId } = req.params;
        const removedUser = await User.deleteOne({_id: userId});
        res.json({removedUser: removedUser, status: true});
    } catch (err) {
        res.json({message: err, status: false});
        return;
    }
    
})

router.put('/:userId', async (req, res) => {
    
    try {
        const { userId } = req.params;
        const { userName } = req.body;
        console.log(userId + userName)
        const updatedUser = await User.updateOne({_id: userId}, {userName: userName});
        res.json({updatedUser: updatedUser, status: true});
        return;
    } catch (err) {
        res.json({message: err, status: false});
        return;
    } 
})

module.exports = router;
