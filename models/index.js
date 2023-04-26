// import models
const Product = require('./Product')(sequelize, Sequelize);
const Category = require('./Category')(sequelize, Sequelize);
const Tag = require('./Tag')(sequelize, Sequelize);
const ProductTag = require('./ProductTag')(sequelize, Sequelize);

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
