import React from "react";
import axios from 'axios'
import Cookies from 'js-cookie';

export default function Header(props)
{
    const url = 'https://nodes1-app.herokuapp.com/logout'
    //const url = 'http://localhost:5000/logout'

    const handleLogout = (e)=>{
     
        e.preventDefault()
        axios.post(url,{}, {withCredentials:true}).then(()=>{
        Cookies.remove("session")
        alert("succesfully logout")
        
       
       
       window.location.reload()
        }
        ).catch((e)=>{
          alert("logout failed")
        }
        )}
        
    return(
        <div>

           
            
            <a href ="/">Home</a>
            {props.pass?
            <form onSubmit = {handleLogout}>
            <button>Logout</button>
            </form>:
       <a href = "/Login">Login</a>
            }
       <a href = "/Products">Products</a>
       <a href = "/Services">Services</a>
        </div>
    )
}