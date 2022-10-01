import React, { Component } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Doctor from '../Images/Doctor.png'
import New from '../Images/New.Png.png'
import Pt from '../Images/Pt.png'
import Qr from '../Images/Qr.png'
import Camera from '../Images/Camera.png'
import Documents from '../Images/Documents.png'
import { Card, Button, Table, Form, Row, Col , Navbar , Container,NavDropdown,Nav ,Tab,Tabs} from 'react-bootstrap';
export default class Dashboard extends Component{
state={
    msg:'',
    ptMsg:''
}
handleChange= (e) =>{
    this.setState({
    [e.target.name]:e.target.value
    })
  }

  PtRecord=() =>{
      this.setState({
    msg:<div>
    <div class="card-body pl-0 pr-0 mt-5" style={{backgroundColor:"#F4F7F8",borderRadius:"1rem"}}>
      <span style={{fontSize:"30px",fontWeight:"600"}}>Patient Records </span>
      <p>{this.state.ptMsg}</p>
  </div>
    </div>}
  )
  }
  changeTabD= () =>{
  this.componentDidMount();
  }

  PtDetails= () => {
    this.setState({
        msg:<div>
            <div class="card-body pl-0 pr-0 mt-5" style={{backgroundColor:"#F4F7F8",borderRadius:"1rem"}}>
            <div class="row " style={{paddingLeft:"2%",paddingRight:"2%"}}>
                <div class="col-md-9 col-sm-12">
                <span style={{fontSize:"30px",fontWeight:"600"}}>Patient Details </span>
                </div>
                <div class="col-md-3 col-sm-12">
                <div class="input-group mb-3"   style={{float:"",border:"2px solid hsl(0deg 0% 91%) ",borderRadius:"1rem",height:"6vh"}}>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"  style={{backgroundColor:"transparent",border:"none"}}><i class="fa fa-search"></i></span>
  </div>
</div>
                    </div>
            </div>
            <center>
                <img src={Qr} style={{height:"20vh"}}/>
            </center>
            <div style={{paddingLeft:"3%",paddingRight:"3%",paddingTop:"4%"}}>
            <div class="row" style={{backgroundColor:"#E9EFF3",padding:"1%",borderRadius:".25rem"}}>
                <div class="col-md-6 col-sm-12 mb-2">
                <span style={{fontWeight:"500"}}>Patient Name</span>
                </div>
                <div class="col-md-6 col-sm-12 mb-2">
                    <span style={{float:"right",fontWeight:"500"}}>XYZ</span>
                </div>
            </div>
            <div class="row" style={{backgroundColor:"transparent",padding:"1%",borderRadius:".25rem"}}>
                <div class="col-md-6 col-sm-12 mb-2">
                <span style={{fontWeight:"500"}}>Address</span>
                </div>
                <div class="col-md-6 col-sm-12 mb-2">
                    <span style={{float:"right",fontWeight:"500"}}>XYZ</span>
                </div>
            </div>
            <div class="row" style={{backgroundColor:"#E9EFF3",padding:"1%",borderRadius:".25rem"}}>
                <div class="col-md-6 col-sm-12 mb-2">
                <span style={{fontWeight:"500"}}>Blood Group</span>
                </div>
                <div class="col-md-6 col-sm-12 mb-2">
                    <span style={{float:"right",fontWeight:"500"}}>XYZ</span>
                </div>
            </div>
            <div class="row" style={{backgroundColor:"transparent",padding:"1%",borderRadius:".25rem"}}>
                <div class="col-md-6 col-sm-12 mb-2">
                <span style={{fontWeight:"500"}}>Patient Name</span>
                </div>
                <div class="col-md-6 col-sm-12 mb-2">
                    <span style={{float:"right",fontWeight:"500"}}>XYZ</span>
                </div>
            </div>
            <div class="row" style={{backgroundColor:"#E9EFF3",padding:"1%",borderRadius:".25rem"}}>
                <div class="col-md-6 col-sm-12 mb-2">
                <span style={{fontWeight:"500"}}>Patient Name</span>
                </div>
                <div class="col-md-6 col-sm-12 mb-2">
                    <span style={{float:"right",fontWeight:"500"}}>XYZ</span>
                </div>
            </div>
            <button onClick={this.PtRecord} style={{backgroundColor:" transparent",cursor:"pointer",marginTop:"20px",border:"none", borderRadius:".25rem",color:"#1F35A4",fontWeight:"500",height:"5.5vh",marginRight:"20px",width:""}}>Click Here</button>

            </div>
            </div>
        </div>
    })
  }
  changeTabDoctor= () =>{
    this.setState({

      msg:<div style={{marginTop:"50px"}}>

            <div class="card-body pl-0 pr-0" style={{backgroundColor:"#F4F7F8",borderRadius:"1rem"}}>
        <div class="row" style={{paddingLeft:"3%",paddingRight:"3%"}}>
        <div class="col-md-8 col-sm-12">
   <span style={{fontSize:"30px",fontWeight:"600"}}>Patient List </span>

   </div>
   <div class="col-md-4 col-sm-12">
    <div class="input-group" style={{borderRadius:".5rem",width:""}} >

           <input type="search" class="form-control rounded" placeholder="Search Doctor..." aria-label="Search" aria-describedby="search-addon" style={{backgroundColor:"white",border:"none",height:"",borderRadius:".5rem",paddingLeft:"10%",}}/>

           <i class="fa fa-search" style={{color:"grey",position:"absolute",left:"2%",top:"28%",fontSize:""}}></i>
           <img src={Camera} style={{height:"4vh",marginTop:"8px",marginLeft:"5px"}}/>

        </div>
           </div>
         </div>
         <div class="responsive-table mt-3" style={{paddingLeft:"3%",paddingRight:"3%"}}>
   <table class="table text-center table-borderless">
  <thead style={{backgroundColor:"#E9EFF3"}}>
    <tr>
      <th scope="col">Patient Records</th>
      <th scope="col">Edit </th>
      <th scope="col">OTP</th>
      <th scope="col">Confirm</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{backgroundColor:'transparent'}}>
      <th  onClick={this.PtDetails} style={{cursor:"pointer"}}> xyz</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style={{backgroundColor:'#E9EFF3'}}>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style={{backgroundColor:'transparent'}}>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>


  </tbody>
</table>
   </div>
         </div>

      </div>

    })
}

Prescription=()=>{
    this.setState({
        ptMsg:<div>
              <div class="row" style={{marginTop:"25px"}}>

                <div class="col-md-4 col-sm-12 mb-2" style={{paddingTop:"2%"}}>
                <span style={{fontWeight:"500",color:"#898989",marginLeft:"30px",}}>Patient Details</span>
                    </div>
                    <div class="col-md-4 col-sm-12 mb-2" style={{padding:"2%"}}>
        <div style={{backgroundColor:"#B3D2F6",height:"7vh",marginTop:"",borderRadius:"1rem",width:"50%",paddingTop:"2%"}}>
        <span style={{fontWeight:"500",color:"#134185",marginLeft:"30px",}}>Prescriptions</span> </div>
                </div>
                    <div class="col-md-4 col-sm-12 mb-2" style={{paddingTop:"2%"}}>
                    <span style={{fontWeight:"500",color:"#898989",marginLeft:"30px",}}>Test Reports</span>
                    </div>
            </div>
            <div style={{height:"30vh"}}></div>
        </div>
    })
}
DoctorList=() =>
{
    this.setState({

        msg:<div style={{marginTop:"50px"}}>

              <div class="card-body pl-0 pr-0" style={{backgroundColor:"#F4F7F8",borderRadius:"1rem"}}>
          <div class="row" style={{paddingLeft:"3%",paddingRight:"3%"}}>
          <div class="col-md-8 col-sm-12">
     <span style={{fontSize:"30px",fontWeight:"600"}}>List of Doctors </span>

     </div>
     <div class="col-md-4 col-sm-12">
      <div class="input-group" style={{borderRadius:".5rem",width:""}} >

             <input type="search" class="form-control rounded" placeholder="Search Doctor..." aria-label="Search" aria-describedby="search-addon" style={{backgroundColor:"white",border:"none",height:"",borderRadius:".5rem",paddingLeft:"10%",}}/>
             <i class="fa fa-search" style={{color:"grey",position:"absolute",left:"2%",top:"28%",fontSize:""}}></i>
          </div>
             </div>
           </div>
           <div class="responsive-table mt-3" style={{paddingLeft:"3%",paddingRight:"3%"}}>
     <table class="table text-center table-borderless">
    <thead style={{backgroundColor:"#E9EFF3"}}>
      <tr>
        <th scope="col">Doctor's Name</th>
        <th scope="col">License No </th>
        <th scope="col">Status</th>
        <th scope="col">Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{backgroundColor:'white'}}>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr style={{backgroundColor:''}}>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr style={{backgroundColor:'white'}}>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
      </tr>


    </tbody>
  </table>
     </div>
           </div>

        </div>

      })
}


componentDidMount(){
    this.setState({

      msg:<div style={{marginTop:"50px"}}>

           <div class="card-body pl-0 pr-0" style={{backgroundColor:"#F4F7F8",borderRadius:"1rem"}}>
           <span style={{fontSize:"30px",fontWeight:"600",marginLeft:"30px",}}>Add Doctor's Identity</span>
<div class="row " style={{padding:"3%"}}>
<div class="col-md-6 col-sm-12 mb-2">
<label for="exampleInputEmail1">Doctor's First Name</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Username" aria-label="Dr Amit" aria-describedby="basic-addon2" style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
<label for="exampleInputEmail1">Email</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="example@example.com" aria-label="Dr Amit" aria-describedby="basic-addon2"style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
<label for="exampleInputEmail1">Address</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Address" aria-label="Dr Amit" aria-describedby="basic-addon2" style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
<br/>
<button style={{backgroundColor:" #097507",cursor:"pointer",border:"1px solid  #097507", borderRadius:".25rem",color:"white",fontWeight:"500",height:"5.5vh",marginRight:"20px",width:"20%"}}>Add</button>

<button style={{backgroundColor:" #990A0A",cursor:"pointer",border:"1px solid  #990A0A", borderRadius:".25rem",color:"white",fontWeight:"500",height:"5.5vh",marginRight:"",width:"20%"}}>Cancel</button>
<button onClick={this.DoctorList} style={{backgroundColor:" transparent",cursor:"pointer",border:"none", borderRadius:".25rem",color:"#1F35A4",fontWeight:"500",height:"5.5vh",marginRight:"20px",width:"20%"}}>Click Here</button>

</div>
<div class="col-md-6 col-sm-12 mb-2">
<label for="exampleInputEmail1">Doctor's Last Name</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Last Name" aria-label="Dr Amit" aria-describedby="basic-addon2" style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
<label for="exampleInputEmail1">License Number</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="AB-1234-5678" aria-label="Dr Amit" aria-describedby="basic-addon2" style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
<label for="exampleInputEmail1">State</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="State" aria-label="Dr Amit" aria-describedby="basic-addon2" style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
    </div>
</div>




</div>
        </div>


        }
    )

    this.setState({
        ptMsg:<div>
            <div class="row" style={{marginTop:"25px"}}>
                <div class="col-md-4 col-sm-12 mb-2" style={{padding:"2%"}}>
        <div style={{backgroundColor:"#B3D2F6",height:"7vh",marginTop:"",borderRadius:"1rem",width:"50%",paddingTop:"2%"}}>
        <span style={{fontWeight:"500",color:"#134185",marginLeft:"30px",}}>Patient Details</span> </div>
                </div>
                <div class="col-md-4 col-sm-12 mb-2" style={{paddingTop:"2%"}}>
                <span style={{fontWeight:"500",color:"#898989",marginLeft:"30px",}}>Prescriptions</span>
                    </div>
                    <div class="col-md-4 col-sm-12 mb-2" style={{paddingTop:"2%"}}>
                    <span style={{fontWeight:"500",color:"#898989",marginLeft:"30px",}}>Test Reports</span>
                    </div>
            </div>

            <div class="row" style={{backgroundColor:"#E9EFF3",padding:"1%",borderRadius:".25rem"}}>
                <div class="col-md-6 col-sm-12 mb-2">
                <span style={{fontWeight:"500"}}>Patient Name</span>
                </div>
                <div class="col-md-6 col-sm-12 mb-2">
                    <span style={{float:"right",fontWeight:"500"}}>XYZ</span>
                </div>
            </div>
            <div class="row" style={{backgroundColor:"transparent",padding:"1%",borderRadius:".25rem"}}>
                <div class="col-md-6 col-sm-12 mb-2">
                <span style={{fontWeight:"500"}}>Address</span>
                </div>
                <div class="col-md-6 col-sm-12 mb-2">
                    <span style={{float:"right",fontWeight:"500"}}>XYZ</span>
                </div>
            </div>
            <div class="row" style={{backgroundColor:"#E9EFF3",padding:"1%",borderRadius:".25rem"}}>
                <div class="col-md-6 col-sm-12 mb-2">
                <span style={{fontWeight:"500"}}>Blood Group</span>
                </div>
                <div class="col-md-6 col-sm-12 mb-2">
                    <span style={{float:"right",fontWeight:"500"}}>XYZ</span>
                </div>
            </div>
            <div class="row" style={{backgroundColor:"transparent",padding:"1%",borderRadius:".25rem"}}>
                <div class="col-md-6 col-sm-12 mb-2">
                <span style={{fontWeight:"500"}}>Patient Name</span>
                </div>
                <div class="col-md-6 col-sm-12 mb-2">
                    <span style={{float:"right",fontWeight:"500"}}>XYZ</span>
                </div>
            </div>
              <div class="row" style={{backgroundColor:"#E9EFF3",padding:"1%",borderRadius:".25rem"}}>
                <div class="col-md-6 col-sm-12 mb-2">
                <span style={{fontWeight:"500"}}>Patient Name</span>
                </div>
                <div class="col-md-6 col-sm-12 mb-2">
                    <span style={{float:"right",fontWeight:"500"}}>XYZ</span>
                </div>
            </div>
        </div>
    }
    )
    }
changeTabPt= () =>{
    this.setState({

      msg:<div style={{marginTop:"50px"}}>

           <div class="card-body pl-0 pr-0" style={{backgroundColor:"#F4F7F8",borderRadius:"1rem"}}>
           <span style={{fontSize:"30px",fontWeight:"600",marginLeft:"30px",}}>Enroll New Patient</span>
<div class="row " style={{padding:"3%"}}>
<div class="col-md-6 col-sm-12 mb-2">
<label for="exampleInputEmail1">Patient's First Name</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Username" aria-label="Dr Amit" aria-describedby="basic-addon2" style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
<label for="exampleInputEmail1">Email</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="example@example.com" aria-label="Dr Amit" aria-describedby="basic-addon2"style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
<label for="exampleInputEmail1">Address</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Address" aria-label="Dr Amit" aria-describedby="basic-addon2" style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
<br/>
<button style={{backgroundColor:" #097507",cursor:"pointer",border:"1px solid  #097507", borderRadius:".25rem",color:"white",fontWeight:"500",height:"5.5vh",marginRight:"20px",width:"20%"}}>Add</button>

<button style={{backgroundColor:" #990A0A",cursor:"pointer",border:"1px solid  #990A0A", borderRadius:".25rem",color:"white",fontWeight:"500",height:"5.5vh",marginRight:"",width:"20%"}}>Cancel</button>
<button style={{backgroundColor:" transparent",cursor:"pointer",border:"none", borderRadius:".25rem",color:"#1F35A4",fontWeight:"500",height:"5.5vh",marginRight:"20px",width:"20%"}}>Click Here</button>

</div>
<div class="col-md-6 col-sm-12 mb-2">
<label for="exampleInputEmail1">Patient's Last Name</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Last Name" aria-label="Dr Amit" aria-describedby="basic-addon2" style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
<label for="exampleInputEmail1">Date of Birth</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="DD/MM/YY" aria-label="Dr Amit" aria-describedby="basic-addon2" style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
<label for="exampleInputEmail1">State</label>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="State" aria-label="Dr Amit" aria-describedby="basic-addon2" style={{backgroundColor:"#E9EFF3",border:"none"}}/>

</div>
    </div>
</div>




</div>
        </div>
        }
    )
}

  render() {
        return (
          <>

          <div class="Container-fluid" >
            <div class="row w-100 m-0">
                <div class="col-md-1 col-sm-12" style={{backgroundColor:"#F1F3F4"}}>
                    <Sidebar/>
                </div>
           <div class="col-md-11 col-sm-12 " style={{backgroundColor:"#F1F5F8"}}>
           <Header/>

           <div style={{paddingLeft:"2%",paddingRight:"2%"}}>
           <span style={{fontSize:"22px",fontWeight:"700"}}>Make an Appointment, That will help you! choose a doctor</span>
           <br/> <br/>
           <div style={{border:"none",width:"100%",borderRadius:".5rem",}}>
           <div class="input-group" style={{borderRadius:".5rem"}} >

  <input type="search" class="form-control rounded" placeholder="Search Doctor..." aria-label="Search" aria-describedby="search-addon" style={{backgroundColor:"white",border:"none",height:"9vh",borderRadius:".5rem",paddingLeft:"5%"}}/>
  <i class="fa fa-search" style={{color:"grey",position:"absolute",left:"2%",top:"28%",fontSize:"25px"}}></i>
  <button type="button" class="btn btn-outline-primary" style={{backgroundColor:"white",border:"none",borderRadius:".5rem",paddingRight:"5%"}}>
  <select class="form-select" aria-label="Default select example" style={{border:"none",color:"grey"}}>
  <option selected style={{}}>All Speccialist</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </button>

</div>
<br/>
<div class="row">
    <div class="col-md-3 col-sm-12 mb-2">
            <div class="Card_a" onClick={this.changeTabD} style={{cursor:"pointer"}}  >
                <div class="row" >
                    <div class="col-3">
                    <img src={Doctor} style={{height:"6vh",marginLeft:"20px",marginTop:"30px"}}/>
                    </div>
                    <div class="col-9" style={{marginTop:"10px",marginBottom:"10px"}}>
                    <span style={{color:"#2D42AA",fontWeight:"600"}}> 03</span>
                    <br/>
                    <span style={{color:"black",fontWeight:"600",fontSize:'22px'}}> Doctors</span>
                    <br/>
                    <small style={{fontSize:"12px"}}>No. of doctors in chain</small>
                    </div>
                </div>
            </div>
    </div>
    <div class="col-md-3 col-sm-12 mb-2 ">
    <div class="Card_a" onClick={this.changeTabPt} style={{cursor:"pointer"}}>
                <div class="row" >
                    <div class="col-3">
                    <img src={New} style={{height:"3.5vh",marginLeft:"20px",marginTop:"40px"}}/>
                    </div>
                    <div class="col-9" style={{marginTop:"10px",marginBottom:"10px"}}>
                    <span style={{color:"#2D42AA",fontWeight:"600"}}> 03</span>
                    <br/>
                    <span style={{color:"black",fontWeight:"600",fontSize:'22px'}}> New Sign ups</span>
                    <br/>
                    <small style={{fontSize:"12px"}}>No of Patient entries in a week.</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-12 mb-2">
        <div class="Card_a" onClick={this.changeTabDoctor} style={{cursor:"pointer"}}>
                <div class="row " >
                    <div class="col-3">
                    <img src={Pt} style={{height:"6vh",marginLeft:"20px",marginTop:"30px"}}/>
                    </div>
                    <div class="col-9" style={{marginTop:"10px",marginBottom:"10px"}}>
                    <span style={{color:"#2D42AA",fontWeight:"600"}}> 03</span>
                    <br/>
                    <span style={{color:"black",fontWeight:"600",fontSize:'22px'}}> Patient</span>
                    <br/>
                    <small style={{fontSize:"12px"}}>No of Patients Enrolled</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-12 mb-2">
        <div class="Card_a" style={{cursor:"pointer"}}>
                <div class="row" >
                    <div class="col-3">
                    <img src={Documents} style={{height:"5vh",marginLeft:"20px",marginTop:"34px",marginRight:""}}/>
                    </div>
                    <div class="col-9 " style={{marginTop:"10px",marginBottom:"10px",}}>
                    <span style={{color:"#2D42AA",fontWeight:"600"}}> 03</span>
                    <br/>
                    <span style={{color:"black",fontWeight:"600",fontSize:'22px'}}> Documents</span>
                    <br/>
                    <small style={{fontSize:"12px"}}>No of Documents Uploaded</small>
                    </div>
                </div>
            </div>
        </div>
</div>
<div>
    <p>{this.state.msg}</p>
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
