const router = require('express').Router();
const Movie = require('../modals/Movies');
const verify = require("../verifyToken");
// const User = require("../modals/User");


// CREATE
router.post('/', verify, async (req, res) => {
    if(req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try{
            const savedMovie = await newMovie.save();          
            res.status(201).json(savedMovie);
        }catch(err){
            res.status(500).json(err);
        }
    }else {
        res.status(403).json("Sorry, You are not allowed.")
    }
});

// UPDATE

router.put('/:id', verify, async (req, res) => {
    if(req.user.isAdmin) {
        try{ 
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, 
                {
                  $set: req.body,
                },
                { new:true }
            );         
            res.status(200).json(updatedMovie);
        }catch(err){
            res.status(500).json(err);
        }
    }else {
        res.status(403).json("Sorry, You are not allowed.")
    }
});

// DELETE MOVIE
router.delete('/:id', verify, async (req, res) => {
    if(req.user.isAdmin) {
        try{ 
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json("The movie has been deleted.");
        }catch(err){
            res.status(500).json(err);
        }
    }else {
        res.status(403).json("Sorry, You are not allowed.")
    }
});

// GET MOVIE 
router.get('/find/:id', verify, async (req, res) => {
    try{ 
        const gotMovie = await Movie.findById(req.params.id)
        res.status(200).json(gotMovie);
    }catch(err){
        res.status(500).json(err);
    }
});

// GET RANDOM 
router.get('/random', verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try{ 
        if(type === "series"){
            movie = await Movie.aggregate([
                {
                    $match: { isSeries: true }
                },
                {
                    $sample: { size: 1 },
                }
            ]);
        }else {
            movie = await Movie.aggregate([
                {
                    $match: { isSeries: false }
                },
                {
                    $sample: { size: 1 },
                }
            ]);
        }
        res.status(200).json(movie)     
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const movies = await Movie.find();
        res.status(200).json(movies.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });

















// DELETE
router.delete('/:id', verify, async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        try{
           await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
        }catch(err){
            res.status(500).json(err);
        }
    }else {
        res.status(403).json("You can delete only your account.")
    }
});

// GET
router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...info} = user._doc;
        res.status(200).json(info)
    }catch(err){
        res.status(500).json(err);
    }
});

// GET ALL
router.get("/", verify ,async (req, res) => {
    const query = req.query.new;
    // console.log(req.user.isAdmin);
    if(!req.user.isAdmin) {
        try{
            const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find();
            res.status(200).json(users)
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json(" ☹ You are not allowed to see all users.")
    }
})


// GET USER STATS
router.get("/stats", async (req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    try{
        const data = await User.aggregate([
            {
                $project:{
                    month:{ $month: "$createdAt"},
                },
            }, 
            {
                $group:{
                    _id: "$month",
                    total: { $sum:1 },
                },
            },
        ]);
        res.status(200).json(data);
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;