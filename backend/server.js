import express from 'express'
import mongoose from 'mongoose';
import data from './Data/data.js'
import userRouter from './routers/userRouter.js'

const app = express()

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/user', userRouter)

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/api/departments', (req, res) => {
  res.send(data.departments)
})

app.get('/api/phones', (req, res) => {
  res.send(data.phones)
})

app.get('/api/products', (req, res) => {
  res.send(data.products)
})


app.get('/', (req, res) => {
  res.send('Server Started')
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
})