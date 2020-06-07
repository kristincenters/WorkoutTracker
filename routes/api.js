const db = require('../models');
console.log(db.Workout);
const express = require('express');
const router = express.Router();

//get workouts
router.get('/api/workout', (req, res) => {
	db.Workout.find({})
		.then((workout) => {
			res.json(workout);
		})
		.catch((err) => {
			res.json(err);
		});
});
module.exports = router;
