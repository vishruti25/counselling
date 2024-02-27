import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';



function Make() {
  const [inputData,setInputData]=useState({
    name: '',
    email:''
  })
  const navigate = useNavigate()

  const handleSubmit =(event) =>{
    event.preventDefault();
    axios.post('http://localhost:8090/api/collections/student/records',inputData)
    .then(res => {
      alert("Data Posted Successfully!")
      navigate('/home')




    })

  }
  




  return (


    <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <lable htmlFor='name'>Name:</lable>
            <input type='text' name='name' className='form-control' placeholder='enter your name'
            onChange={e => setInputData({...inputData, name:e.target.value})}/>
          </div><br></br>
          <div>
            <lable htmlFor="email">Email:</lable>
            <input type='email' name='email' className='form-control' placeholder='abc@example.com'
             onChange={e => setInputData({...inputData, email:e.target.value})}/>

          </div><br></br>
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Make