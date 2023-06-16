var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const userService = require('../services/user');

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await userService.findById(id);
  res.json(result);
})

// all users
router.get('/all', auth.ensureSignedIn, async (req, res) => {
  const result = await userService.findAll();
  res.json(result);
})

router.post('/update-password', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {
  const currentUserId = req?.currentUser;
  const { current_pwd, new_pwd, repeat_pwd } = req.body
  const result = await userService.updatePass(currentUserId, current_pwd, new_pwd, repeat_pwd)
  res.json(result)
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  const currentUserId = req?.currentUser;
  const { firstName, lastName } = req.body
  const result = await userService.update(currentUserId, firstName, lastName)
  res.json(result)
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  const currentUserId = req?.currentUser;
  const result = await userService.remove(currentUserId)
  if(result.success){
    logout(req.session)
  }
  res.json(result)
})

module.exports = router