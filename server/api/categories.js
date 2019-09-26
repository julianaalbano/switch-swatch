const router = require('express').Router();
const { Category } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    console.log('made it to backend get route in Category!');
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    next(err);
  }
});
