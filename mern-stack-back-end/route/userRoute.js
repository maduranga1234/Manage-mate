const express = require('express');
const user = require('../modules/user');
const customer = require("../modules/customer");

const router = express.Router();

router.post('/user/post',async(req,res)=>{

    try{
        const newUser = new user(req.body);
        console.log(newUser);
        await newUser.save();
        return res.status(200).json({
            success: "user saved successfully"
        })

    }catch(error){
        return res.status(400).json({
            error: error.message || "Error saving user"
        })
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }


        const existingUser = await user.findOne({ username });

        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }


        if (existingUser.password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }


        return res.status(200).json({ success: "Login successful", user: existingUser });
    } catch (error) {
        return res.status(500).json({
            error: error.message || "Error logging in"
        });
    }
});






module.exports = router;