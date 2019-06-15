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
      res.status(200).json({ users: users });
    })
    .catch(next);
});

/*
 * Budgets
 */
router.get('/budgets', function (req, res, next) {
  db.select('*').from('budgets')
    .where('userId', req.query.userId)
    .first()
    .then(budgets => {
      res.status(200).json({ budgets: budgets });
    })
    .catch(next);
});

router.get('/budgets/:id', function (req, res, next) {
  db.select('*').from('budgets')
    .where('id', req.params.id)
    .first()
    .then(budget => {
      res.status(200).json({ budget: budget });
    })
    .catch(next);
});

/*
 * Categories
 */
router.get('/categories', function (req, res, next) {
  db.select('*').from('categories')
    .then(categories => {
      res.status(200).json({ categories: categories });
    })
    .catch(next);
});

router.get('/categories/:id', function (req, res, next) {
  db.select('*').from('categories')
    .where('id', req.params.id)
    .first()
    .then(category => {
      console.log(category);
      res.status(200).json({ category: category });
    })
    .catch(next);
});

/*
 * Category Budget Amounts
 */
router.get('/categorybudgetamounts', function (req, res, next) {
  db.select('*').from('categorybudgetamounts')
    .where({
      budgetId: req.query.budgetId,
      categoryId: req.query.categoryId
    })
    .then(amounts => {
      res.status(200).json({ amounts: amounts });
    })
    .catch(next);
});

router.get('/categorybudgetamounts/find_by_budget', function (req, res, next) {
  db.select('*').from('categorybudgetamounts')
    .where({
      budgetId: req.query.budgetId
    })
    .then(amounts => {
      res.status(200).json({ amounts: amounts });
    })
    .catch(next);
})

/*
 * Category Budget Amounts
 */
router.get('/transactions/find_by_category', function (req, res, next) {
  db.select('*').from('transactions')
    .where({
      categoryId: req.query.categoryId
    })
    .then(transactions => {
      res.status(200).json({ transactions: transactions });
    })
    .catch(next);
});

export default router;