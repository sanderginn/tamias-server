import express from 'express';
import db from './db';

var router = express.Router();

router.use(function (req, res, next) {
  // do logging
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function (req, res, next) {
  db.select('*').from('users')
    .then(users => {
      res.status(200).send(users);
    })
    .catch(next);
});

router.get('/categories', function (req, res, next) {
  db.select('*').from('categories')
    .then(categories => {
      res.status(200).send(categories)
    })
    .catch(next);
});

router.get('/categories/:id', function (req, res, next) {
  db.select('*').from('categories').where('id', req.params.id)
    .then(category => {
      res.status(200).send(category)
    })
    .catch(next);
});

export default router;