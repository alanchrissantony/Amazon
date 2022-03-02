import React, { useEffect, useState } from 'react';
import './departments.css'
import axios from 'axios';
import Department from './department';
import LoadingBox from '../LoadingBox/loadingBox';
import MessageBox from '../MessageBox/messageBox';


function Departments() {

  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(()=>{
    const fetchData = async ()=>{

      try{
        setLoading(true)
        const{data}=await axios.get('/api/departments')
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
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>{error}</MessageBox>
        ) : (
          <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className='departmentBackgroundImg' alt="" />
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
