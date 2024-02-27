import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const[data,setData] = useState([])
    
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:8090/api/collections/student/records')
        .then(res =>{
            console.log(res.data)
            setData(res.data.items)

        } )
        .catch(err => console.log(err))
    },[])

  return (
    <div className='container mt-5'>
        <h2>Student Information</h2>
        <Link to="/make" className='btn btn-success my-3'>create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Stuname</th>
                    <th>EMAIL</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d,i) => (
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td >
                            <Link  className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link>
                            <button  className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>
                            <Link  className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d.id}`}>Read</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )

    function handleDelete(id){
        const confirm = window.confirm("would you like to delete this data?");
        if(confirm){
    

        axios.delete('http://localhost:8090/api/collections/student/records/'+id)
        .then(res =>{
            alert("record deleted successfully...")
            navigate('/home')
        })
        }
    }

}

export default Home