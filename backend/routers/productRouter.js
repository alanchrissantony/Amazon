import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../Data/data.js';
import Product from '../models/productModel.js';



const productRouter = express.Router();

productRouter.get('/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get('/seed',
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

productRouter.post('/add',
  expressAsyncHandler(async (req, res) =>{
    const data = req.body
    const createdProduct = await Product.insertMany(data.product);
    res.send({ createdProduct });
  })

);

productRouter.post('/edit',
  expressAsyncHandler(async (req, res) =>{
    const data = req.body

    const product = await Product.findById(data._id);

    if(product){

      product.name = data.name || product.name;
      product.image = data.image || product.image;
      product.brand = data.brand || product.brand;
      product.category = data.category || product.category;
      product.department = data.department || product.department;
      product.description = data.description || product.description;
      product.price = data.price || product.price;
      product.countInStock = data.countInStock || product.countInStock;
      
    }
    const updatedProduct = await product.save()

      res.send({ updatedProduct });
    
  })

);

productRouter.post('/delete',
  expressAsyncHandler(async (req, res) =>{
    const data = req.body
    const deletedProduct = await Product.deleteOne({ _id: data.id });
    res.send({ deletedProduct });
  })

)

productRouter.get('/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);


productRouter.post('/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.find({department: req.params.id});
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);


export default productRouter;