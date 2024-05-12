import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function ReadTeacher() {

   const {id} =useParams ()
   const navigate = useNavigate()
   const [Data,setData] = useState([])

   useEffect(( ) =>{
    axios.get('http://localhost:8090/api/collections/teacher/records/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className=' d-flex w-100 vh-100 justify-content-center align-items-center'>
       
            <div className='w-50 border bg-black text-white p-5' > 
            <p>ID:&nbsp;{Data.id}</p>
            <p>NAME:&nbsp;{Data.name}</p>
            <p>EMAIL:&nbsp;{Data.email}</p>
            <Link to='/admint'>Back</Link>
            </div>
            

        
    </div>
  )
}

export default ReadTeacher