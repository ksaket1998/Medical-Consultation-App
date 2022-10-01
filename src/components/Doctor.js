import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Lungs3 from '../Images/Lungs (3).png'
import Lungs2 from '../Images/Lungs (2).png'
import Lungs1 from '../Images/Lungs (1).png'
import ImgO from '../Images/ImgO.png'
import ImgP from '../Images/ImgP.png'
import ImgB from '../Images/ImgB.png'
import Graph from '../Images/graph.png'
import New from '../Images/New.Png.png'
import Pt from '../Images/Pt.png'
import Qr from '../Images/Qr.png'
import Documents from '../Images/Documents.png'
import { Card, Button, Table, Form, Row, Col , Navbar , Container,NavDropdown,Nav ,Tab,Tabs} from 'react-bootstrap';
export default class Doctor extends Component{
    render() {
        return (
          <>
          <div class="Container-fluid" >
            <div class="row w-100 m-0">
                <div class="col-md-1 col-sm-12 " style={{backgroundColor:"#F1F3F4"}}>
                    <Sidebar/>
                </div>
                <div class="col-md-11 col-sm-12" style={{backgroundColor:"#F0F3F6"}}>
           <Header/>
           <div style={{paddingLeft:"2%",paddingRight:"2%"}}>
           <span style={{fontSize:"22px",fontWeight:"700"}}>Make an Appointment, That will help you! choose a doctor</span>
           <br/> <br/>
           <div class="input-group" style={{borderRadius:"",border:"1px solid F1F5F8"}} >

           <input type="search" class="form-control rounded" placeholder="Search Doctor..." aria-label="Search" aria-describedby="search-addon" style={{backgroundColor:"white",borderRadius:"1rem",border:"none",height:"9vh",paddingLeft:"5%"}}/>
           <i class="fa fa-search" style={{color:"grey",position:"absolute",left:"2%",top:"28%",fontSize:"25px"}}></i>
           <button type="button" class="btn btn-outline-primary" style={{backgroundColor:"white",border:"none",borderRadius:"",paddingRight:"5%"}}>
           <select class="form-select" aria-label="Default select example" style={{border:"none",color:"grey"}}>
           <option selected style={{}}>All Speccialist</option>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
         </select>
           </button>

         </div>
         <div style={{backgroundColor:"#F5F8F9",borderRadius:".5rem",padding:"2%",height:"",marginTop:"40px"}}>
            <span style={{fontSize:"22px",fontWeight:"600"}}>Consults for Today</span>
            <div class="d-flex mt-4">
            <div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>
</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
            </div>
            <div class="d-flex mt-1">
            <div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>
</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"white",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}>1</button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"transparent",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}></button>

</div>
<div class="p-2 flex-fill">
<button style={{borderRadius:"2rem",backgroundColor:"transparent",width:"3rem",height:"3rem",border:"1px solid white",color:"grey",fontWeight:"600"}}></button>

</div>
            </div>

         </div>
         <div class="mt-5" style={{}}>
         <span style={{fontSize:"22px",fontWeight:"600",marginLeft:"30px"}}>Examination</span>
         <div class="row mt-4">
            <div class="col-md-3 col-sm-12 mb-2">
                <div style={{backgroundColor:"#EAEEEE",height:"25vh",borderRadius:".5rem",paddingTop:"6%",paddingLeft:"10%"}}>
               
                    <img src={Lungs3} style={{height:"5vh",marginBottom:"10px"}}/> <span style={{fontSize:"24px",fontWeight:"600"}}>Lungs</span>
                    <br/> 
                    <span style={{fontSize:"20",fontWeight:"",color:"grey"}}>Date : 12 July 2022</span>
                    <br/>
                    <br/>
                    <img src={ImgO}  style={{height:"4vh",marginBottom:""}}/>
                </div>

            </div>
            <div class="col-md-3 col-sm-12 mb-2">
            <div style={{backgroundColor:"#EAEEEE",height:"25vh",borderRadius:".5rem",paddingTop:"6%",paddingLeft:"10%"}}>
               
               <img src={Lungs1} style={{height:"5vh",marginBottom:"10px"}}/> <span style={{fontSize:"24px",fontWeight:"600"}}>Kidney</span>
               <br/> 
               <span style={{fontSize:"20",fontWeight:"",color:"grey"}}>Date : 12 July 2022</span>
               <br/>
               <br/>
               <img src={ImgP}  style={{height:"4vh",marginBottom:""}}/>
           </div>

            </div>
            <div class="col-md-3 col-sm-12 mb-2">
            <div style={{backgroundColor:"#EAEEEE",height:"25vh",borderRadius:".5rem",paddingTop:"6%",paddingLeft:"10%"}}>
               
               <img src={Lungs2} style={{height:"5vh",marginBottom:"10px"}}/> <span style={{fontSize:"24px",fontWeight:"600"}}>Teeth</span>
               <br/> 
               <span style={{fontSize:"20",fontWeight:"",color:"grey"}}>Date : 12 July 2022</span>
               <br/>
               <br/>
               <img src={ImgB}  style={{height:"4vh",marginBottom:""}}/>
           </div>

            </div>
            <div class="col-md-3 col-sm-12 mb-2">
            <div style={{backgroundColor:"#EAEEEE",height:"25vh",borderRadius:".5rem",paddingTop:"6%",paddingLeft:"10%"}}>
               
               <img src={Lungs3} style={{height:"5vh",marginBottom:"10px"}}/> <span style={{fontSize:"24px",fontWeight:"600"}}>Lungs</span>
               <br/> 
               <span style={{fontSize:"20",fontWeight:"",color:"grey"}}>Date : 12 July 2022</span>
               <br/>
               <br/>
               <img src={ImgO}  style={{height:"4vh",marginBottom:""}}/>
           </div>
            </div>
         </div>
         <div style={{marginTop:"20px",backgroundColor:"#F4F7F8",paddingLeft:"4%",paddingTop:"3%",marginBottom:"40px"}}>
         <span style={{fontSize:"22px",fontWeight:"600"}}>Health Curve</span>
            <img src={Graph} style={{height:"45vh",}}/>
         </div>
         </div>
           </div>
           
           </div>
           </div></div>
         </>
        )
    }
}
