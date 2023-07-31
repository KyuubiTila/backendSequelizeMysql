const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRoute.js');

const app = express();

// BODY PARSER
var corOptions = {
  origin: 'https://localhost/8080',
};

// MIDDLEWARES

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// -------------ROUTERS---------------
// ---------product route---------
app.use('/api/products', productRouter);

// TESTING API

app.get('/', (req, res) => {
  res.json({ message: 'hello from api' });
});

// PORT

const PORT = process.env.PORT || 8080;

// SERVER
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
