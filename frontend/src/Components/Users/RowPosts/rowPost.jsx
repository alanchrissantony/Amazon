import React, { useEffect, useState } from 'react';
import './rowPost.css'
import axios from 'axios';

function RowPost() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
        const{data}=await axios.get('/api/phones')
        setProducts(data)
        };
        fetchData();
    },[])

  return (
      <div>
        <div className="rowPosterSection">
            <div className='rowPosterContainer'>
                <div className="divRow">
                    <div className="posters">
                        {products.map(products=>(
                            <img key={products._id} className='poster' src={products.image} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
       
      </div>
  )
}

export default RowPost;
