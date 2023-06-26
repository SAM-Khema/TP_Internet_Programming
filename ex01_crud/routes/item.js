var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();

const itemService = require('../services/item');
router.get('/all', async (req, res) => {
  console.log("hELLO");
  const result = await itemService.findAll()
  res.json(result)
})



// all items

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
  const {name, category, desc} = req.body
  const result = await itemService.create({name, category, desc})
  res.json(result);
})


router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const { id } = req.params;
  const { name, desc, category } = req.body;
  const result = await itemService.update(id, { name, desc, category })
  res.json(result);
})

router.post('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
  const { id } = req.params;
  const result = await itemService.remove(id)
  res.json(result);
})



router.get('/:id', async function (req, res, next) {
  // return res.json(req.params.id)
  const { id } = req.params;
  const result = await itemService.findById(id)
  res.json(result);
})


module.exports = router