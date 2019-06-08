import express from 'express';
import db from './db';

var router = express.Router();

router.use(function (req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function (req, res, next) {
  db.from('users').select("*")
    .then((rows) => {
      console.log(rows);
    });
  return res.status(200).send({ 'message': 'OK', 'users:': `` });
});

router.get('/categories', function (req, res, next) {
  db.from('categories').select("*")
    .then((rows) => {
      console.log(rows);
    });

  return res.status(200).send({ 'message': 'OK', 'categories:': `` });
});

export default router;