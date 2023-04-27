// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

const sequelize = require('../config/connection.js');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag });

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag });

// Sync database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
