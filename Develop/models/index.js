// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//foreign key is parent information
Product.belongsTo(Category,{
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
//products and tags are like siblings -this is a way to connect them
//do not have parent child relationship
//trip is third table to connect
Product.belongsToMany(Tag,{
  through:{
    model:ProductTag,
    unique: false
  }
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: {
    model:ProductTag,
    unique:false
  },

  
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
