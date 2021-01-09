import React from "react"
import Home from './Home'
import Login from './login'
import Products from './Products'
import Header from './Header'
import Service from './Service'
import Cookies from 'js-cookie';
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";



function App() {
 
  // const local = document.cookie;
  const local = Cookies.get("session")
  
  const PrivateRoute = ({ component , path})=>{
  if(local!=null)
  {      
         return <Route 
         path = {path}
        component = {component}
         />
  }
  else{

    return <Redirect to = '/Login'/>

  }
  }
  return(
    <div>
      <Header pass = {local} />
     <BrowserRouter>
       <Switch>
         <Route exact path = "/"> <Home/></Route>
          <Route exact path = "/Login"><Login/></Route>
         <PrivateRoute 
         path = "/Products"
         component = {Products}
         />
          <PrivateRoute 
         path = "/Services"
         component = {Service}
         />


       </Switch>
       </BrowserRouter>
    </div>
)
}

export default App;
