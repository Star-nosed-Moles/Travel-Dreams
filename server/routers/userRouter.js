const express = require('express');
//importing user
const userController = require('../controllers/userController.js');
//router instance
const router = express.Router();

// get one user
router.get('/', userController.get, (req, res) => {
  return res.status(200).send({ user: res.locals.user });
});

// get list of all users, for debugging & postman tests
router.get('/all', userController.getAll, (req, res) => {
  return res.status(200).send({ users: res.locals.users });
})

// for user creation
router.post('/', userController.create, (req, res) => {
  return res.status(200).send({ user: res.locals.user });
});

module.exports = router;