import React, {useState} from "react";
//import "./login.css"
import PasswordMask from 'react-password-mask'
//import Checkbox from "./Checkbox"


//import {Button,FormControl,FormGroup,FormLabel} from "react-bootstrap";

function Login(props){

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const staticEmail = "abc@gmail.com";
      const staticPassword = "12345";

    function validateForm(){
       return email.length > 0 && password.length>0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }
    

    function emailChange(e){
        setEmail(e.target.value)
    }
    function passwordChange(e){
        setPassword(e.target.value)
        console.log(password);
  }

    function buttonClick(event){
        event.preventDefault();
       if(
           password === staticPassword
                    &&
           email===staticEmail 
         ){
           console.log("Working");
           props.setAuthentication(true)
          }
       else{
           console.log("not working");
           alert("enter correct details")
           
     }
    }

    
    
    

    return(
    
    
      <div className = "Login">
          <div>
          <img className ="lockimg" src="lockn.png" alt ="img"/>
          <h2>Leave Management System</h2>
          </div>
          <form onSubmit = {handleSubmit}  >
              {/* <FormGroup controlledId = "email" bsSize = "large">
                  <FormLabel> Email</FormLabel>
                  <FormControl
                  autoFocus
                  type = "email"
                  value={email}
                  onChange = {e => setEmail(e.target.value)}/>
              </FormGroup>

              <FormGroup controlledId ="password" bsSize ="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                    value = {password}
                    onChange={e=> setPassword(e.target.value)}
                    type ="password"/>
              </FormGroup> */}
    <div id = "impressive">
              
          <div className="login1">
            <input type="text" 
              placeholder ="Email" 
              onChange = {emailChange}/>
          </div>
              
          <div>
           <PasswordMask 
              id = "passwordmask"
              type="text" 
              placeholder ="Password"
              onChange={passwordChange}/>
         </div>
              
    </div>
              
        
      
      
              
              <input id = "check" type ="checkbox" name ="check1"  /> Remember me <br/>

              <a href="/">Forgot Password</a><br/>
              <button onClick ={buttonClick} 
                      block bsSize="large" 
                      disabled={!validateForm()} 
                      type="submit">
                       Log in
              </button>
              
          </form>
      </div>
    ); 

}

export default Login;