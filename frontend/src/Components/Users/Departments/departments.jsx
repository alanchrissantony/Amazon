import React, { useEffect, useState } from 'react';
import './departments.css'
import axios from 'axios';
import Department from './department';
import RowPost from '../RowPosts/rowPost';
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
          <section className='departmentsSectionContainer'>
            <div className="departmentsDivContainer">

              {departments.map(departments=>(
                <Department key={departments._id} departments={departments}></Department>
              ))}
            </div>
          </section>
          )}
      </div>
  )
}

export default Departments;
