import React from 'react';
import './departments.css'
import electronics from '../../../Images/electronics.jpg';
import laptop from '../../../Images/laptop.jpg';
import data from '../Data/data';


function departments() {
  return (
      <div>
          <section className='departmentsSectionContainer'>
            <div className="departmentsDivContainer">

              {data.departments.map(departments=>(
                <div key={departments._id} className="departmentBox">
                <a href="" className='departmentTitleLink'><h2 className='departmentTitle'>{departments.title}</h2></a>
                <a href="" className='departmentImageLink'><img src={departments.image} className='departmentImage' alt="" /></a>
                <br />
                <a href=""className='departmentShopLink'>Shop now</a>
              </div>
              ))}
            </div>
          </section>
      </div>
  )
}

export default departments;
