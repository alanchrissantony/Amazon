import React from 'react';
import './departments.css'
import {useNavigate} from 'react-router-dom'

function Department(props) {

    const {departments} = props;
    const navigate=useNavigate()

  return (
    <div key={departments._id} className="departmentBox" onClick={(e)=>{
        e.preventDefault()
        navigate('/products')
      }}>
      <a className='departmentTitleLink'><h2 className='departmentTitle'>{departments.title}</h2></a>
      <a className='departmentImageLink'><img src={departments.image} className='departmentImage' alt="" /></a>
      <br />
      <a href=""className='departmentShopLink' onClick={(e)=>{
        e.preventDefault()
        navigate('/products')
      }}>Shop now</a>
    </div>
  )
}

export default Department;