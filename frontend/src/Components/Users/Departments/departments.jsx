import React, { useEffect, useState } from 'react';
import './departments.css'
import axios from 'axios';
import Department from './department';
import LoadingBox from '../LoadingBox/loadingBox';
import MessageBox from '../MessageBox/messageBox';
import Banner from '../Banner/Banner';


function Departments() {

  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(()=>{
    const fetchData = async ()=>{

      try{
        setLoading(true)
        const {data} =await axios.post('/api/departments')
        setLoading(false)
        setDepartments(data)
      }catch(err){
        setError(err.message)
        setLoading(false)
      }
    };
    fetchData();
  },[])

  

  return (
      <div className='departmentRootSection'>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>{error}</MessageBox>
        ) : (
          <div>
            <Banner/>
          <section className='departmentsSectionContainer'>
            
            <div className="departmentsDivContainer">

              {departments.map(departments=>(
                <Department key={departments._id} departments={departments}></Department>
              ))}
            </div>
          </section>
          </div>
          )}
      </div>
  )
}

export default Departments;
