const router = require('express').Router();
const { Category, Color } = require('../db/models');
module.exports = router;

router.get('/:name', async (req, res, next) => {
  try {
    const color = await Category.findOne({
      where: {
        name: req.params.name,
      },
      include: {
        model: Color,
      },
    });
    res.json(color);
  } catch (err) {
    next(err);
  }
});
