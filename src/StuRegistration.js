import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const  StuRegistration = () => {

    const[formData,setFormData] = useState({
        
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    })

    

    const [errors,setErrors] = useState({})
    const [valid,setValid] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        
        let isvalid =true;
        let validationErrors = {}
        if(formData.fname === "" || formData.fname === null){
            isvalid = false;
            validationErrors.fname = "First name required"
        }
        if(formData.lname === "" || formData.lname === null){
            isvalid = false;
            validationErrors.lname = "Last name required"
        }
        if(formData.email === "" || formData.email === null){
            isvalid = false;
            validationErrors.email = "email required"
        }else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            isvalid = false;
            validationErrors.email = "Email is not valid"
        }

        if(formData.password === "" || formData.password === null){
            isvalid =false;
            validationErrors.password ="password required"
        }else if(formData.password.length < 8) {
            isvalid = false;
            validationErrors.password = "password length at least 8 char"
        }

        if(formData.cpassword !== formData.password){
            isvalid = false;
            validationErrors.cpassword = "cpwd is not same as pwd"    
        }

        setErrors(validationErrors)
        setValid(isvalid)

        if(Object.keys(validationErrors).length === 0)
        {
            axios.post('http://localhost:8090/api/collections/student_Registration/records', formData)
            .then(res => {
                alert("Registered Successfully")
                navigate('/stulogin')
            })
           
            
        }

    
    }

return (
    
<div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                
                <form action="" class="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
                    <h4 class="mb-5 text-secondary">Create Your Account</h4>
                    {
                    valid ? <></> :
                    <span className='text-danger'>
                        {errors.fname}; {errors.lname}; {errors.email}; 
                        {errors.password}; {errors.cpassword}

                    </span>
                    }
                    <div class="row">
                        
                        <div className="mb-3 col-md-6">
                            <label>First Name<span class="text-danger">*</span>
                            </label>
                            <input 
                                type="text" 
                                name="fname" 
                                class="form-control" 
                                placeholder="Enter First Name"
                                onChange={e => setFormData({...formData, fname: e.target.value})}
                                />
                        </div>
                         
                        <div className="mb-3 col-md-6">
                            <label>Last Name<span class="text-danger">*</span>
                            </label>
                            <input 
                                type="text" 
                                name="Lname" 
                                class="form-control" 
                                placeholder="Enter Last Name"
                                onChange={e => setFormData({...formData, lname: e.target.value})}
                                />
                        </div>
                        
                        <div className="mb-3 col-md-6">
                            <label>Email<span class="text-danger">*</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                class="form-control" 
                                placeholder="Enter email"
                                onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                        </div>
                        

                        <div className="mb-3 col-md-12">
                            <label>Password<span class="text-danger">*</span></label>
                            <input 
                            type="password" 
                            name="password" 
                            class="form-control" 
                            placeholder="Enter Password"
                            onChange={e => setFormData({...formData, password: e.target.value})}
                            />
                        </div>
                        
                        <div className="mb-3 col-md-12">
                            <label>Confirm Password<span class="text-danger">*</span></label>
                            <input 
                            type="password" 
                            name="confirmpassword" 
                            class="form-control" 
                            placeholder="Confirm Password"
                            onChange={e => setFormData({...formData, cpassword: e.target.value})}
                            />
                        </div>
                        
                        <div className="col-md-12">
                           <button class="btn btn-primary float-end">Signup Now</button>
                        </div>
                    </div>
                </form>
                <p class="text-center mt-3 text-secondary">If you have account, Please <Link to={"/stulogin"}>Login Now</Link></p>
            </div>
        </div>
    </div>
</div>

  )
}

export default StuRegistration 








