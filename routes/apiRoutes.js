const db = require("../models");

module.exports = function(app) {
  app.get("/api/workout/", (req, res) => {
    db.Workout.find({})

      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.get("/api/workout/range", (req, res) => {
    db.Workout.find({})
      .sort({ day: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout.slice(0, 10));
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workout", (req, res) => {
    db.Workout.create({})
      .then(addWorkout => {
        res.json(addWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workout/:id", (req, res) => {
    db.Workout.update(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then(addToWorkout => {
        res.json(addToWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
}