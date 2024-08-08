

const express = require("express");
const router = express.Router();

const Workout = require("../Models/workoutModel");

router.get("/:id", (req, res) => {
    res.send("GET MY WORKOUT");

});

router.post("/:id", async (req, res) => {
    const {title, video, animation, text} = req.body

    try{
      const workout = await Workout.create({title, video, animation, text});
      res.status(200).json(workout);
    } catch(error){
        res.status(400).json({error: error.message});
    }


});

router.delete("/:id", (req, res) => {


});

router.patch("/:id", (req, res) => {


});


module.exports = router