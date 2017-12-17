var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('', ['tracks']);

// Get All Tasks
router.get('/tracks', function (req, res, next) {
    db.tracks.find(function (err, tracks) {
        if (err) {
            res.send(err);
        }
        res.json(tracks);
    });
});

// Get Single Task
router.get('/track/:id', function (req, res, next) {
    db.tracks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, track) {
        if (err) {
            res.send(err);
        }
        res.json(track);
    });
});

//Save Task
router.post('/track', function (req, res, next) {
    var track = req.body;
    if (!track.title || !(track.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tracks.save(track, function (err, track) {
            if (err) {
                res.send(err);
            }
            res.json(track);
        });
    }
});

// Delete Task
router.delete('/track/:id', function (req, res, next) {
    db.tracks.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, track) {
        if (err) {
            res.send(err);
        }
        res.json(track);
    });
});
// Get All Tasks
router.get('/genres', function (req, res, next) {
    db.genres.find(function (err, genres) {
        if (err) {
            res.send(err);
        }
        res.json(genres);
    });
});

// Get Single Task
router.get('/genre/:id', function (req, res, next) {
    db.genres.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, genre) {
        if (err) {
            res.send(err);
        }
        res.json(genre);
    });
});

//Save Task
router.post('/genre', function (req, res, next) {
    var genre = req.body;
    if (!genre.title || !(genre.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.genres.save(genre, function (err, genre) {
            if (err) {
                res.send(err);
            }
            res.json(genre);
        });
    }
});

// Delete Task
router.delete('/genre/:id', function (req, res, next) {
    db.genres.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, genre) {
        if (err) {
            res.send(err);
        }
        res.json(genre);
    });
});

// // Update Task
// router.put('/genre/:id', function (req, res, next) {
//     var genre = req.body;
//     var updTask = {};

//     if (task.isDone) {
//         updTask.isDone = task.isDone;
//     }

//     if (task.title) {
//         updTask.title = task.title;
//     }

//     if (!updTask) {
//         res.status(400);
//         res.json({
//             "error": "Bad Data"
//         });
//     } else {
//         db.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, updTask, {}, function (err, task) {
//             if (err) {
//                 res.send(err);
//             }
//             res.json(task);
//         });
//     }
// });

module.exports = router;
