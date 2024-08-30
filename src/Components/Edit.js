import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Edit(props) {
  
  const [companyName,setCompanyName] = useState(props.data.companyName);
  const [jobTitle,setjobTitle] = useState(props.data.jobTitle);
  const [placementDate,setplacementDate] = useState(props.data.placementDate);
  const [studentId,setstudentId] = useState(props.data.studentId);
  let base_url = "http://localhost/api/placement";
  let navigate = useNavigate();
 let update = ()=>{
    let data = {
      id:props.data.id,
      companyName:companyName,
      jobTitle:jobTitle,
      placementDate:placementDate,
      studentId:studentId
    }

    axios.put(base_url,data).then( res=>{
        alert("Updated Successfully !")
        navigate("/")
    }).catch(err=>{
        alert(err);
        navigate("/")
    })
 }

  return (
    <div>
       
    <div className='form'>
          <h3 style={{textAlign:"center"}}>Modify</h3>
        <div className='form-row'>
        <p>Company Name : </p>
        <input value={companyName} onChange={(e)=>setCompanyName(e.target.value)}></input>
        </div>
        <div  className='form-row'>
        <p>Job Title : </p>
        <input value={jobTitle} onChange={(e)=>setjobTitle(e.target.value)} ></input>
        </div>
        <div  className='form-row'>
        <p>Placement Date : </p>
        <input value={placementDate} type='date' onChange={(e)=>setplacementDate(e.target.value)} ></input>
        </div>
        <div  className='form-row'>
        <p>Student Id : </p>
        <input value={studentId} onChange={(e)=>setstudentId(e.target.value)}></input>
        </div>
        <div className='ct'>
        <button className='btn danger' onClick={()=>navigate("/")}>Back</button>
        <button className='btn' onClick={()=>update()}>Update</button>
       
        </div>
    </div>
    </div>
    
  )
}

export default Edit