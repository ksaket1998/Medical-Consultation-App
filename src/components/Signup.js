import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom';
import Image8 from '../Images/image 8.png'
import { Card, Button, Table, Form, Row, Col , Navbar , Container,NavDropdown,Nav} from 'react-bootstrap';
export default class Signup extends Component{

  render() {
        return (
          <>
          <div class="Container">
           <div class="row p-0 w-100 " style={{minHeight:"100vh"}}>
            <div class="col-md-6 col-sm-12 ">
            <div style={{marginLeft:"20px",marginTop:"20px",marginRight:"20px"}}>

                <span style={{fontSize:"34px",fontWeight:"650",marginLeft:"20px"}}>Create Account</span>
                <br/>
                <span style={{color:"grey",marginLeft:"20px"}}>Hello, welcome back to our account</span>
                <br/>
                <div style={{marginLeft:"20px",marginTop:"15px",marginRight:"20px"}}>
                <div class="input-group" style={{marginTop:"",borderRadius:"1rem",border:"2px solid hsl(0deg 0% 91%)"}}>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" style={{borderRadius:"1rem",height:"8vh",border:"none"}}/>
   
                </div>
                <div class="input-group" style={{marginTop:"20px",borderRadius:"1rem",border:"2px solid hsl(0deg 0% 91%)"}}>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" style={{borderRadius:"1rem",height:"8vh",border:"none"}}/>
   
                </div>
                <div class="input-group" style={{marginTop:"20px",borderRadius:"1rem",border:"2px solid hsl(0deg 0% 91%)"}}>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" style={{borderRadius:"1rem",height:"8vh",border:"none"}}/>
   
                </div>
                <div class="input-group" style={{marginTop:"20px",borderRadius:"1rem",border:"2px solid hsl(0deg 0% 91%)"}}>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirm Password" style={{borderRadius:"1rem",height:"8vh",border:"none"}}/>
   
                </div>
              
                
    <button style={{borderRadius:"1rem",fontWeight:"500",height:"8vh",border:"none",width:"100%",marginTop:"30px",marginBottom:"5px",backgroundColor:"hsl(193deg 53% 97%)"}}>Create</button>
    <center class="mt-1">
    <small style={{color:"grey"}}>Or Signin with Google</small></center>  

    <button style={{borderRadius:"1rem",fontWeight:"500",height:"8vh",border:"none",width:"100%",marginTop:"10px",marginBottom:"5px",backgroundColor:"hsl(193deg 53% 97%)"}}><i class="fa fa-google"></i> Google</button>
    <br/>
<span style={{fontWeight:"500"}}>Already have an account?</span>
<Link to="/signin">
<span style={{color:"blue",fontWeight:"500"}}> Signin</span>
</Link>
  
  </div>
               </div>
            </div>
            <div class="col-md-6 col-sm-12 text-center " style={{backgroundColor:"hsl(207deg 83% 95%)"}}>
                <br/>
                <br/>
            <img src={Image8} style={{height:"85vh",marginTop:""}}/>
</div>
           </div>
          </div>
        
          </>
        )
  }
}