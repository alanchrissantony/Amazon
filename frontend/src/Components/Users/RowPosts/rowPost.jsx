import React from 'react';
import './rowPost.css'
import data from '../Data/data';

function rowPost() {
  return (
      <div>
        <div className="rowPosterSection">
            <div className='rowPosterContainer'>
                <div className="divRow">
                    <div className="posters">
                        {data.products.map(products=>(
                            <img key={products._id} className='poster' src={products.image} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
       
      </div>
  )
}

export default rowPost;
