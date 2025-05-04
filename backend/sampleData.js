const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB for sample data');
  return Product.insertMany([
    {
      name: 'T-Shirt',
      price: 499,
      description: 'Comfortable cotton t-shirt',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Jeans',
      price: 999,
      description: 'Stylish denim jeans',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Sneakers',
      price: 1999,
      description: 'Casual running shoes',
      image: 'https://via.placeholder.com/150'
    }
  ]);
})
.then(() => {
  console.log('Sample products added');
  mongoose.disconnect();
})
.catch((err) => {
  console.error('Error adding sample data:', err);
});
