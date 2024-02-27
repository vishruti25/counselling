import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const StuLogin = () => {

  const[formData,setFormData] = useState({
    email: '',
    password: '',   
  })
  const [errors,setErrors] = useState({})
  const [valid,setValid] = useState(true)
  const navigate=useNavigate()
  const handleSubmit = (event) =>{
    event.preventDefault(); 
    let isvalid =true;
    let validationErrors = {}
    
    if(formData.email === "" || formData.email === null){
      isvalid = false;
      validationErrors.email = "email required;"
    }else if(!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not valid;"
    }

    if(formData.password === "" || formData.password === null){
      isvalid =false;
      validationErrors.password ="password required;"
    }else if(formData.password.length < 8) {
      isvalid = false;
      validationErrors.password = "password length at least 8 char;"
    }


  
    
    axios.get('http://localhost:8090/api/collections/student_Registration/records')
    .then(res=> {
      console.log("*****",res)

      res.data.items.map(user => {
        if(user.email === formData.email){
          if(user.password === formData.password){
            alert("Login Successfully..")
            navigate('/')
          } else {
            isvalid = false;
            validationErrors.password = "wrong password;"
          }        
        }
        
      })
      setErrors(validationErrors)
      setValid(isvalid)
    }) 
    
    
  }
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                
                <form action="" class="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
                    <h4 class="mb-5 text-secondary">Login as User</h4>
                    {
                    valid ? <></> :
                    <span className='text-danger'>
                        {errors.email}; {errors.password}
                    </span>
                    }
                    <div class="row">                                                
                        
                        <div class="mb-3 col-md-12">
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
                        
                        <div class="mb-3 col-md-12">
                            <label>Password<span class="text-danger">*</span></label>
                            <input 
                              type="password" 
                              name="password" 
                              class="form-control" 
                              placeholder="Enter Password"
                              onChange={e => setFormData({...formData, password: e.target.value})}
                            />
                        </div>                        
                        <div class="col-md-12">
                           <button class="btn btn-primary float-end">Login Now</button>
                        </div>
                    </div>
                </form>
                <p class="text-center mt-3 text-secondary">If you don't have account, Please <Link to={"/sturegistration"}>Registration</Link></p>
            </div>
        </div>
    </div>
</div>
  )
}

export default StuLogin 

