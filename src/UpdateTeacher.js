import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function Updatet() {

    const {id} =useParams();

    const [inputData,setInputData]=useState({
        id: id,
        name: '',
        email:''
      })
      const navigate = useNavigate();

      useEffect(( ) =>{
        axios.get('http://localhost:8090/api/collections/teacher/records/'+id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
      },[])



      const handleSubmit =(event) =>{
        event.preventDefault();
        axios.patch('http://localhost:8090/api/collections/teacher/records/'+id , inputData)
        .then(res => {
            alert("Data updated Successfully...")
            navigate('/admint')
        })
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
          
          <div>
            <lable htmlFor='id'>ID:</lable>
            <input type='string' disabled name='id' className='form-control' value={inputData.id}/>
          </div>
          
          <div>
            <lable htmlFor='name'>Name:</lable>
            <input type='text' name='name' className='form-control' placeholder='enter your name' value={inputData.name}
            onChange={e => setInputData({...inputData, name: e.target.value})}/>
          </div>
          <div>
            <lable htmlFor="email">Email:</lable>
            <input type='email' name='email' className='form-control' placeholder='abc@example.com' value={inputData.email}
            onChange={e => setInputData({...inputData, email: e.target.value})}/>

          </div>
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Updatet
