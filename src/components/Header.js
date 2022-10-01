import React, { Component } from 'react'
import '../css/style.css'
import P from '../Images/Group 254.png'
import { Link } from 'react-router-dom';
import Bell from '../Images/Bell.png'
import Gear from '../Images/Gear.png'
import Mail from '../Images/Mail.png'
import { Card, Button, Table, Form, Row, Col , Navbar , Container,NavDropdown,Nav} from 'react-bootstrap';
export default class Header extends Component{

  render() {
        return (
          <>
          <div class="Container">
          <nav class="navbar navbar-expand-lg " style={{backgroundColor:"transparent",paddingTop:"0px"}}>
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{backgroundColor:"transparent"}}>
    <ul class="navbar-nav  mt-2 " style={{marginLeft:"auto",backgroundColor:"transparent"}}>
      <li class="nav-item " >
        <a class="nav-link" href="#"><img src={Bell} style={{height:"4vh"}}/></a>
      </li>
      <li class="nav-item" >
        <a class="nav-link" href="#"><img src={Mail} style={{height:"4vh"}}/></a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#"><img src={Gear} style={{height:"4vh"}}/></a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#"><img src={P} style={{height:"4vh"}}/></a>
      </li>
    </ul>

  </div>
</nav>
          </div>
          </>
        )
  }
}