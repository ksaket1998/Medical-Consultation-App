import React, { Component } from 'react'
import '../css/style.css'
import P from '../Images/Group 254.png'

import { Link } from 'react-router-dom';
import { Card, Button, Table, Form, Row, Col , Navbar , Container,NavDropdown,Nav} from 'react-bootstrap';
export default class Sidebar extends Component{

  render() {
        return (
          <>
          <div class="  " style={{paddingTop:"2%",backgroundColor:"#F1F3F4",minHeight:"100vh",paddingBottom:"5%",marginBottom:"20px"}}>
          <br/><br/>
          <img class="" src={""} style={{height:"4vh"}}/>
          <div class="" style={{paddingLeft:"1%",paddingRight:"1%"}}>
          <center>
                <img src={P} style={{height:"9vh",marginTop:"20px"}}/>
                </center>
          <br/><br/>
          <br/><br/>
          <div class="">
            <div class="a " >
          <Link to="/dashboard">
            <center>
            <i class="fa fa-home" aria-hidden="true" style={{fontSize:"30px",color:"grey",marginTop:"10px"}}></i>
            <br/>
          <button class=" " style={{fontSize:"13px",color:"grey ",fontWeight:"410",border:"none",backgroundColor:"transparent"}}> Dashboard</button>
          </center>
         
          </Link>
          </div><br/><br/>
          <div class="a" >
          <Link to="/doctor">
            <center>
            <i class="fa fa-user-md" aria-hidden="true" style={{fontSize:"30px",color:"grey",marginTop:"10px"}}></i>
            <br/>
          <button class=" " style={{fontSize:"13px",color:"grey ",fontWeight:"410",border:"none",backgroundColor:"transparent"}}> Doctor</button>
          </center>
          </Link>
          </div>
          <br/><br/>
          <div class="a" >
          <Link to="#">
            <center>
            <i class="fa fa-comment" aria-hidden="true" style={{fontSize:"30px",color:"grey",marginTop:"10px"}}></i>
            <br/>
          <button class=" " style={{fontSize:"13px",color:"grey ",fontWeight:"410",border:"none",backgroundColor:"transparent"}}> Contact</button>
          </center>
          </Link>
          </div>
</div>




          </div>
          </div>
          </>
        )
      }
    }
