// Add exercises to a previous workout plan.
// Add new exercises to a new workout plan.
// View multiple the combined weight of multiple exercises on the stats page.

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
router.post('/api/workout', (req, res) => {
	console.log('hello');
	db.Workout.create({})
		.then((workout) => {
			res.json(workout);
		})
		.catch((err) => {
			res.json(err);
		});
});
router.put('/api/workout/:id', (req, res) => {
	db.Workout.findOneAndUpdate(
		{ _id: req.params.id },
		{ $push: { exercises: req.body } }
	)
		.then((workout) => {
			res.json(workout);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get('/api/workout/range', (req, res) => {
	db.Workout.find({})
		// .populate('exercises')
		.then((workout) => {
			res.json(workout);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
