import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom';

import { Card, Button, Table, Form, Row, Col , Navbar , Container,NavDropdown,Nav} from 'react-bootstrap';
export default class LandingHeader extends Component{

  render() {
        return (
          <>
          <div class="Container">
          <nav class="navbar navbar-expand-lg " style={{backgroundColor:"white",paddingTop:"0px"}}>
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{backgroundColor:"transparent"}}>
  <ul class="navbar-nav  mt-2 " style={{marginRight:"auto",backgroundColor:"transparent"}}>
  <li class="nav-item" >
        <a class="nav-link" href="#" style={{width:"10rem"}}>
            </a>
      </li>
      <li class="nav-item" >
        <a class="nav-link" href="/dashboard" style={{color:"grey",fontWeight:"500",marginRight:"30px"}}>
        <i class="fa fa-home" aria-hidden="true"></i> Dashboard  </a>
      </li>
      <li class="nav-item" >
        <a class="nav-link" href="#" style={{color:"grey",fontWeight:"500",marginRight:"30px"}}>
        <i class="fa fa-user-md" aria-hidden="true"></i> Doctor  </a>
      </li>
      <li class="nav-item" >
        <a class="nav-link" href="#" style={{color:"grey",fontWeight:"500"}}>
        <i class="fa fa-comment" aria-hidden="true"></i> Contact  </a>
      </li>
    </ul>
    <ul class="navbar-nav  mt-2 " style={{marginLeft:"auto",backgroundColor:"transparent"}}>
      <li class="nav-item" style={{marginRight:"10px"}}>
        <a class="nav-link" href="#">
            <span style={{fontWeight:"500",color:"grey"}}>Call Now </span><br/><span style={{fontWeight:"600",color:"black"}}>+91 123456789</span></a>
      </li>
      <li class="nav-item" style={{width:"8rem"}} >
        <a class="nav-link " href="/signin"><button style={{marginTop:"5px",border:"#EB8154",backgroundColor:"#EB8154",color:"white",fontWeight:"600",height:"5.5vh",width:"120%",borderRadius:"1rem",paddingLeft:"5%"}}>Login</button></a>
      </li>
    
    </ul>

  </div>
</nav>
          </div>
          </>
        )
  }
}