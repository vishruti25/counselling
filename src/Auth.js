import pb from "./lib/pocketbase";
import { useState } from "react";
import { useFormAction } from "react-router-dom";

export default function Auth(){
    const[isLoading,setLoading]=useState(false);
    const{register,handleSubmit}=useFormAction();

    async function login(data){
        setLoading(true);
        const authdata =await pb
        .collection("student_Registration")
        .authWithPassword(data.email,data.password);
       setLoading(false); 
    }
    return(
        <>
        <h1>Logged In :{pb.authStore.isValid.toString()}</h1>
        <form onSubmit={handleSubmit(login)}>
            <input type='text' {...register("email")}/>
            <input type='password' {...register("password")}/>
            <button type='submit' disabled={isLoading}>
                {isLoading ? "Loading":"Login"}
            </button>
       </form>
        
        
        
        
        
        
        </>




        
    );
}


