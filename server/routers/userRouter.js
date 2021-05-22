const express = require('express');
//importing user
const userController = require('../controllers/userController.js');
//router instance
const router = express.Router();


router.get('/', userController.get, (req, res) => {
  return res.status(200).send({ user: res.locals.user });
});

router.post('/', userController.create, (req, res) => {
  return res.status(200).send('userRouter.js - router.post post');
});

module.exports = router;