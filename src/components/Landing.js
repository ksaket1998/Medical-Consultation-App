import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom';
import Doctor from '../Images/doctor_.png'
import { Card, Button, Table, Form, Row, Col , Navbar , Container,NavDropdown,Nav} from 'react-bootstrap';
import LandingHeader from './LandingHeader';
import Fa6 from '../Images/fa6.png'
import Oou from '../Images/ooui.png'
import Teen from '../Images/teen.png'
import Bot from '../Images/Bot.png'
export default class Landing extends Component{

  render() {
        return (
          <>
       
          <div class="Container-fluid" style={{marginLeft:"100px",marginRight:"100px"}}>
          <LandingHeader/>
            <div class="row w-100 ">
                <div class="col-md-7 col-sm-12  mt-5">
                    <div>
                        <br/>
                    <h1 style={{fontSize:"50px",fontWeight:"700",color:"#0D2085"}}>Consult a Doctor<br/> Anytime, Anywhere <br/> by Video Call</h1>
                    <br/>
                    <span style={{fontSize:"18px"}}>Talk with a doctor using our highly secured end-to-end<br/> encrypted video call</span>
                    <br/><br/>
                    <button style={{backgroundColor:"#FDB098",border:"1px solid #FDB098", color:"white",fontWeight:"500",height:"10vh",borderRadius:"2rem",paddingLeft:"10%",paddingRight:"10%"}}>Make an Appointment</button>
                    <button style={{backgroundColor:"transparent",marginLeft:"20px",border:"2px solid #FDB098", color:"#0D2085",fontWeight:"500",height:"10vh",borderRadius:"2rem",paddingLeft:"10%",paddingRight:"10%"}}>Unlimited Chat</button>
                    </div>
                
                </div>
                <div class="col-md-5 col-sm-12 text-center">
                <img src={Doctor} style={{height:"75vh"}}/>
                </div>
                </div>
                </div>
                <div style={{backgroundColor:"#F1F5F8",paddingBottom:"5%",marginTop:""}}>
            <center style={{padding:"5%"}}>
                <span style={{fontSize:'30px',fontWeight:"650"}}>Why you should Trust us?<br/> Get know about us</span>
            </center>
            <div class="row w-100" style={{paddingLeft:"7%",paddingRight:"7%"}}>
                <div class="col-md-3 col-sm-12 mb-2">
                <div style={{backgroundColor:"#EAEEEE",borderRadius:".5rem",paddingLeft:"3%",paddingRight:"3%",paddingTop:"5%",paddingBottom:"5%",height:"35vh"}}>
                <center>
                    <br/>
                    <img src={Fa6} style={{height:"8vh",marginBottom:"10px"}}/>
                    <br/>
                <span style={{fontSize:"20px",fontWeight:"600"}}>All Specialist</span>
                <br/>
                <small>You can reach out to 3000+ doctors from 80+ specialist who are experienced in telemedicine</small>
                <br/>
                </center>
                </div>
                </div>
                <div class="col-md-3 col-sm-12 mb-2">
                <div style={{backgroundColor:"#EAEEEE",borderRadius:".5rem",paddingLeft:"3%",paddingRight:"3%",paddingTop:"5%",paddingBottom:"5%",height:"35vh"}}>
                <center>
                    <br/>
                    <img src={Oou} style={{height:"8vh",marginBottom:"10px"}}/>
                    <br/>
                <span style={{fontSize:"20px",fontWeight:"600"}}>Private & Secure</span>
                <br/>
                <small>All your data is protected and safeguarded with sucresd SSL, dataat rest encryption.</small>
                <br/>
                </center>
                </div>
                    </div>
                    <div class="col-md-3 col-sm-12 mb-2">
                    <div style={{backgroundColor:"#EAEEEE",borderRadius:".5rem",paddingLeft:"3%",paddingRight:"3%",paddingTop:"5%",paddingBottom:"5%",height:"35vh"}}>
                <center>
                    <br/>
                    <img src={Teen} style={{height:"8vh",marginBottom:"10px"}}/>
                    <br/>
                <span style={{fontSize:"20px",fontWeight:"600"}}>Chatbot Support</span>
                <br/>
                <small>Fet access to doctor via chatbots for a fantastic telehealth Service.</small>
                <br/>
                </center>
                </div>
                    </div>
                    <div class="col-md-3 col-sm-12 mb-2">
                    <div style={{backgroundColor:"#EAEEEE",borderRadius:".5rem",paddingLeft:"3%",paddingRight:"3%",paddingTop:"5%",paddingBottom:"5%",height:"35vh"}}>
                <center>
                    <br/>
                    <img src={Fa6} style={{height:"8vh",marginBottom:"10px"}}/>
                    <br/>
                <span style={{fontSize:"20px",fontWeight:"600"}}>All Specialist</span>
                <br/>
                <small>You can reach out to 3000+ doctors from 80+ specialist who are experienced in telemedicine</small>
                <br/>
                </center>
                </div>
                    </div>

            </div>

            <div class="mt-5" style={{paddingLeft:"7%",paddingRight:"7%"}}>
            <div class="row w-100 mt-5">
            <div class="col-md-5 col-sm-12 mb-2 text-center">
                <img src={Bot} style={{height:"70vh"}}/>
                </div>
                <div class="col-md-7 col-sm-12 mb-2">
                    <br/>
                <h2 style={{fontSize:'35px',fontWeight:"650"}}>Start an online chat <br/>consultation with a doctor.</h2>
                <br/>
                <span style={{fontSize:"18px"}}>Post unlimited follow-ups to the doctor for the next 50 to 100 hours <br/>by picking one of our chat services. Easily accessible via our website.</span>
                <br/>

                <div class="row">
                    <div class="col-md-6 col-sm-12 mb-2">
                    <div class="form-check mt-5">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{marginTop:"20px",border:"1px solid blue",height:"25px",width:"25px"}}/>
  <label class="form-check-label" for="flexRadioDefault1" >
  <button class="shadow"style={{backgroundColor:"white",border:"1px solid white",borderRadius:"2rem",paddingRight:"150%",height:"9vh",paddingLeft:"20%",fontWeight:"500",width:"7rem",marginLeft:"20px"}}>Query</button>
  </label>
</div>
<div class="form-check mt-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{marginTop:"20px",border:"1px solid blue",width:"25px",height:"25px"}}/>
  <label class="form-check-label" for="flexRadioDefault1" >
  <button  class="shadow" style={{backgroundColor:"white",border:"1px solid white",borderRadius:"2rem",paddingRight:"150%",height:"9vh",paddingLeft:"20%",fontWeight:"500",width:"7rem",marginLeft:"20px"}}>Phone</button>
  </label>
</div>
                    </div>
                    <div class="col-md-6 col-sm-12 mb-2">
                    <div class="form-check mt-5">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{marginTop:"20px",border:"1px solid blue",width:"25px",height:"25px"}}/>
  <label class="form-check-label" for="flexRadioDefault1" >
  <button class="shadow" style={{backgroundColor:"white",border:"1px solid white",borderRadius:"2rem",paddingRight:"150%",height:"9vh",paddingLeft:"20%",fontWeight:"500",width:"7rem",marginLeft:"20px"}}>Chat</button>
  </label>
</div>                <div class="form-check mt-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{marginTop:"20px",border:"1px solid blue",width:"25px",height:"25px"}}/>
  <label class="form-check-label" for="flexRadioDefault1" >
  <button class="shadow" style={{backgroundColor:"white",border:"1px solid white",borderRadius:"2rem",paddingRight:"150%",height:"9vh",paddingLeft:"20%",fontWeight:"500",width:"7rem",marginLeft:"20px"}}>Video</button>
  </label>
</div>
                        </div>
                </div>

                </div>

            </div>
            </div>
                </div>
          </>
        )
  }
}