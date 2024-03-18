const express = require('express');
const user = require('../modules/user');

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


module.exports = router;