import express from 'express'
import data from './Data/data.js'

const app = express()

app.get('/api/products', (req,res)=>{
    res.send(data)
})

app.get('/', (req,res)=>{
    res.send('Server Started')
})

const port=process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`)
})