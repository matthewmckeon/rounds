const express = require('express');
const Round = require('../models/roundModel');

const router = express.Router();

// GET / endpoint
router.route('/').get((req, res) => {
  Round.find()
    .then((rounds) => res.json(rounds))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// POST /add endpoint
router.route('/add').post((req, res) => {
  // Set params = req.body
  const name = req.body.name;
  const course = req.body.course;
  const type = req.body.type;
  const par = Number(req.body.par);
  const score = Number(req.body.score);
  const date = Date.parse(req.body.date);

  // Create new document in schema
  const newRound = new Round({
    name,
    course,
    type,
    par,
    score,
    date,
  });

  // Save round, catch erros
  newRound
    .save()
    .then((round) => res.json(round))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get /:id endpoint
router.route('/:id').get((req, res) => {
  // Use findById this time
  Round.findById(req.params.id)
    .then((round) => res.json(round))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// DELETE /:id endpoint
router.route('/:id').delete((req, res) => {
  Round.findByIdAndDelete(req.params.id)
    .then(() => res.json('Round deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// PUT /update/:id endpoint
router.route('/update/:id').put((req, res) => {
  // 1) Find round by id
  Round.findById(req.params.id)
  // Update the round with data from req.body
    .then((round) => {
      round.name = req.body.name;
      round.course = req.body.course;
      round.type = req.body.type;
      round.score = Number(req.body.score);
      round.par = Number(req.body.par);
      round.date = Date.parse(req.body.date);

      // save, check out data, catch errors
      round
        .save()
        .then((round) => res.json(round))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
