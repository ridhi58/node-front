import React , {useState , useEffect}from "react"
import './App.css';
import axios from 'axios'
import Cookies from 'js-cookie';
import {useHistory } from "react-router-dom";



export default function Login(){

const history = useHistory();
const [name1 , setName1]  = useState("")
const[email, setEmail] = useState("")
const[pass , setPass] = useState("")
const[lName , setLname] = useState("")
const[lPass , setLpass] = useState("")
const url = 'https://nodes1-app.herokuapp.com/'
// const url = 'http://localhost:5000/'

const handleSubmit = (e)=>{
  e.preventDefault()
  var obj = {
    name:name1,
    email:email,  
    password:pass
  }
axios.post(url +'users', obj).then((res)=>{
alert("registration succesful")}
).catch((e)=>{
  alert("already registered")
})
}

const handleLogin = (e)=>{
e.preventDefault()
  var obj = {
    email:lName,
    password:lPass
  }
 axios.post(url + 'login' , obj, {withCredentials:true}).then((res)=>{
 alert("success")
 console.log(document.cookie)
//  console.log(res.data.token)
  
 if(document.cookie!=null){
 Cookies.set("session", true)
 }
 
   history.push("/");
   window.location.reload()
 }  
 ).catch((e)=>{
  alert("invalid login")
 })
}


  return (
    <div className="App">
     <form onSubmit = {handleSubmit}>
       <input name = "name" value = {name1} type = "text" placeholder = "name" onChange = {(e)=>{setName1(e.target.value)}}/><br/>
       <input name = "email" value = {email} type = "text" placeholder = "email" onChange = {(e)=>{setEmail(e.target.value)}} /><br/>
       <input name = "pass" value = {pass} type = "text" placeholder = "password" onChange = {(e)=>{setPass(e.target.value)}}/>
       <button>Register</button>
     </form>

     <h1>login</h1>
     <form onSubmit = {handleLogin}>
       <input name = "loginName" value = {lName} type ="text" placeholder = "name" onChange = {(e)=>{setLname(e.target.value)}}/>
       <input name = "lPass" value = {lPass} type  = "text" onChange = {(e)=>{setLpass(e.target.value)}} />
      <button>Login</button>
     </form>
 
    </div>
  );
}

