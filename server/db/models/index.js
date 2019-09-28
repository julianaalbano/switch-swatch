const Color = require('./color');
const Category = require('./category');

Category.hasMany(Color);
Color.belongsTo(Category);

module.exports = {
  Color,
  Category,
};
