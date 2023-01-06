import React,{useState} from 'react'
import {Signup} from './signup'
import {Login} from './login'

function App() {

const [CurrentPage,setCurrentPage]=useState("login")

const switchPage=(switchName)=>{
setCurrentPage(switchName)
}

return (
  <div>
  {
    CurrentPage==="login"?
    <Login loginPage={switchPage}/>:
    <Signup  loginPage={switchPage}/>
  }
  </div>
  );
}

export default App;
