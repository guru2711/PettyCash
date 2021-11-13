import React from 'react'
import {useState} from "react"
import axios from "axios"
import "../login/login.css"
import {useNavigate, Redirect} from 'react-router-dom';


export default function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();


    const add =async (e) => {
        e.preventDefault()
        
       
        if(email === ""){
          alert("please enter your email id")
        }else{
        
          console.log(email)  
        }
        if(password === ""){
          alert("please enter your password")
        }
        else{
        
          console.log(password)  
        }
     
        
       try{
        await axios.post("http://localhost:3000/login",{
          email: email,
          password: password
        })
        
        alert(" successfully login")
        navigate('/')
       }catch(err){
         alert(err)
         navigate('/register')
       }
        }
    return (
        <div>
            <div className = "App">
        <div className="box">
      <form onSubmit={add}>
         	<span className="text-center">Login</span>

    

          <div className="input-container">	
          <input type="email" name = "email" autoComplete = "on"   onChange={(event) => {
              setEmail(event.target.value)
        }} required />
          <label>Email</label>
    
          </div>

          <div className="input-container">	
          <input type="password" name = "password" autoComplete = "on"   onChange={(event) => {
              setPassword(event.target.value)
        }} required />
          <label>password</label>
    
          </div>

         
        
          <button type="submit" className="btn btn-danger">Login</button>
          <Redirect to="/register
          ">
              <button className="btn btn-1 btn-danger">Register</button>
          </Redirect>
      </form>
        </div>
        </div>
        </div>
    )
}
