import express from 'express'
import data from './Data/data.js'

const app = express()

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

app.get('/api/departments', (req,res)=>{
    res.send(data.departments)
})

app.get('/api/phones', (req,res)=>{
    res.send(data.phones)
})

app.get('/api/products', (req,res)=>{
    res.send(data.products)
})


app.get('/', (req,res)=>{
    res.send('Server Started')
})

const port=process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`)
})