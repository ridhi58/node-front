import React from "react";
import axios from 'axios'

export default function Header(props)
{
    const handleLogout = (e)=>{
     
        e.preventDefault()
        axios.post('https://nodes1-app.herokuapp.com/logout',{}, {withCredentials:true}).then(()=>{
        alert("succesfully logout")
        
        localStorage.clear()
        console.log("checkout cookie",localStorage.getItem('protect'))
       window.location.reload()
        }
        ).catch((e)=>{
          alert("logout failed")
        }
        )}
        
    return(
        <div>

           
            
            <a href ="/">Home</a>
            {props.pass!=null?
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