import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom';
import Image8 from '../Images/image 8.png'
import Flag from '../Images/Flag.png'
import { Card, Button, Table, Form, Row, Col , Navbar , Container,NavDropdown,Nav,Tab,Tabs} from 'react-bootstrap';
export default class Signin extends Component{
state={
    LoginMsg:'',

}
handleChange= (e) =>{
    this.setState({
    [e.target.name]:e.target.value
    })
  }
handleEmail=() =>{
    this.componentDidMount();
}

componentDidMount(){
    this.setState({
        LoginMsg:<div style={{marginTop:"60px"}}>
         <label for="exampleInputEmail1" style={{fontWeight:"500"}}>Enter Email </label>    
 <div class="input-group" style={{marginTop:"",borderRadius:"1rem",border:"2px solid hsl(0deg 0% 91%)"}}>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@example.com" style={{borderRadius:"1rem",height:"8vh",border:"none"}}/>
    <div class="input-group-append" style={{borderRadius:"1rem",border:"none",background:"transparent"}}>
    <span class="input-group-text" id="basic-addon2" style={{backgroundColor:"transparent",border:"none"}}><i class="fa fa-check-circle" aria-hidden="true" style={{color:"green"}}></i></span>
  </div>

  
  </div>

   <button style={{borderRadius:"1rem",fontWeight:"500",height:"8vh",border:"none",width:"100%",marginTop:"30px",backgroundColor:"hsl(193deg 53% 97%)"}}>Request OTP</button>
  <br/>
  <center class="mt-4">
    <small style={{color:"grey"}}>Or Signin with Google</small></center>  

    <button style={{borderRadius:"1rem",fontWeight:"500",height:"8vh",border:"none",width:"100%",marginTop:"30px",marginBottom:"5px",backgroundColor:"hsl(193deg 53% 97%)"}}><i class="fa fa-google"></i> Google</button>
 <br/>
<span style={{fontWeight:"500"}}>Not Registered Yet?</span>
<Link to="/signup">
<span style={{color:"orange",fontWeight:"500"}}> Create an account</span>
</Link>
        </div>
    }
    )
}
  render() {
        return (
          <>
          <div class="Container-fluid m-0 p-0">
           <div class="row p-0  w-100 " style={{minHeight:"100vh"}}>
            <div class="col-md-6 col-sm-12 " style={{padding:"2%"}}>
                <div style={{marginLeft:"20px"}}>

                <span style={{fontSize:"34px",fontWeight:"650",marginLeft:"20px"}}>Login Account</span>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{marginLeft:"auto",float:"right",marginTop:"10px",border:"none"}}>
  <option selected></option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<br/>
                <span style={{color:"grey",marginLeft:"20px"}}>Hello, welcome back to our account</span>
                <br/>
                <div style={{backgroundColor:"hsl(200deg 14% 96%)",border:"hsl(200deg 14% 96%)",height:"9vh",marginTop:"30px",borderRadius:"2rem",marginLeft:"20px",marginRight:"20px"}}>
                <button onClick={this.handleEmail} style={{backgroundColor:"white",width:"14rem",fontWeight:"500",color:"black",border:"none",marginTop:"10px",marginLeft:"10px",height:"6vh",borderRadius:"1rem"}}>Email</button>
                <button style={{backgroundColor:"transparent",width:"14rem",fontWeight:"500",color:"grey",border:"none",marginTop:"10px",marginLeft:"10px",height:"6vh",borderRadius:"1rem"}}>Phone Number</button>
                            <div >
                            <p>{this.state.LoginMsg}</p>
                                </div>   
                </div>
                </div>
            
            </div>
            <div class="col-md-6 col-sm-12 text-center m-0 p-0" style={{backgroundColor:"hsl(207deg 83% 95%)"}}>
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