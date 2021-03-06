const router = require('express').Router();
const { Color, Category } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const colors = await Color.findAll({
      include: {
        model: Category,
      },
    });
    res.json(colors);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const color = await Color.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Category,
      },
    });
    res.json(color);
  } catch (err) {
    next(err);
  }
});
