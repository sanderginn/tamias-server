import express from 'express';
import db from './db';

var router = express.Router();

router.use(function (req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function (req, res, next) {
  return res.status(200).send({ 'message': 'OK' });
});

router.route('/categories')
  .post(function (req, res, next) {
    db.createQuery
  });

export default router;