const router = require('express').Router();
const List = require('../modals/List');
const verify = require("../verifyToken");
// const User = require("../modals/User");


// CREATE
router.post('/', verify, async (req, res) => {
    if(req.user.isAdmin) {
        const newList = new List(req.body);
        try{
            const savedList = await newList.save();          
            res.status(201).json(savedList);
        }catch(err){
            res.status(500).json(err);
        }
    }else {
        res.status(403).json("Sorry, You are not allowed.")
    }
});

module.exports = router;