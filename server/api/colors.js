const router = require('express').Router();
const { Color } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    console.log('made it to backend get route in Color!');
    const colors = await Color.findAll();
    res.json(colors);
  } catch (err) {
    next(err);
  }
});
