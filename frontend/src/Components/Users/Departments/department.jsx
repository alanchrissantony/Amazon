import React from 'react';
import './departments.css'
import {useNavigate} from 'react-router-dom'

function Department(props) {

    const {departments} = props;
    const navigate=useNavigate()


  return (
    <div key={departments._id} className="departmentBox" onClick={(e)=>{
        e.preventDefault()
        navigate(`/product/${departments._id}`)
      }}>
      <a className='departmentTitleLink'><h2 className='departmentTitle'>{departments.name}</h2></a>
      <a className='departmentImageLink'><img src={departments.image} className='departmentImage' alt="" /></a>
      <br />
      <p className='departmentShopLink' onClick={(e)=>{
        e.preventDefault()
        navigate(`/product/${departments._id}`)
      }}>Shop now</p>
    </div>
  )
}

export default Department;
