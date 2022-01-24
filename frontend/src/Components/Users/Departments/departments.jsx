import React, { useEffect, useState } from 'react';
import './departments.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Departments() {

  const navigate=useNavigate()

  const [departments, setDepartments] = useState([]);

  useEffect(()=>{
    const fecthData = async ()=>{
      const{data}=await axios.get('/api/departments')
      setDepartments(data)
    };
    fecthData();
  },[])

  return (
      <div>
          <section className='departmentsSectionContainer'>
            <div className="departmentsDivContainer">

              {departments.map(departments=>(
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
              ))}
            </div>
          </section>
      </div>
  )
}

export default Departments;
