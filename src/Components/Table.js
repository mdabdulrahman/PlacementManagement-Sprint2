import React, { useEffect, useState } from 'react'
import axios from 'axios';
import edit from '../assets/edit.png';
import del from '../assets/delete.png';
import { useNavigate } from 'react-router-dom';
import addbtn from '../assets/add-button.png'
function Table() {
    
     const [data,setData] = useState(null);
     const [isLoading,setIsLoading] = useState(true);
     const [error,setError] = useState(null);
     let base_url = "http://localhost/api/placement";
     let navigate = useNavigate();
     let getData = () =>
     {
        axios.get(base_url).then(
            res =>
            {
                setData(res.data);
                setIsLoading(false);
            }
        ).catch(
            err=> {
                setError(err);
                setIsLoading(false);
            }
        )
     }
     useEffect(
        ()=>
        {
            getData();
        }
        ,[isLoading])
      
        let deleteRow = (id) =>{
            axios.delete(base_url+"?id="+id).then(res=>{alert( "deleted successfully");   setIsLoading(true)})
          
        
        }

      return (
        <div className='table'>


<button className="btn-add" onClick={()=>navigate("/add")}>
    <img src={addbtn} className='logo-add'/>
   <p> Add </p></button>

        {/* table header */}  
        <div className='table-row table-header'>
        <p style={{width:'5%'}}>Id</p>
           <p style={{width:'25%'}}>Company Name</p>
           <p style={{width:'25%'}}>Job Title</p>
           <p style={{width:'20%'}}>Placement Date</p>
           <p style={{width:'5%'}}>Stu ID</p>
            <p>Modify</p>
            <p>Delete</p>
        </div>
        
        {/* table body */}
        {!isLoading&&data.length!=0?data.map(r=>(

        <div className='table-row' key = {r.id}>
           <p style={{width:'5%',fontWeight:"bold"}}>{r.id}</p>
           <p style={{width:'25%'}}>{r.companyName}</p>
           <p style={{width:'25%'}}>{r.jobTitle}</p>
           <p style={{width:'20%'}}>{r.placementDate}</p>
           <p style={{width:'5%'}}>{r.studentId}</p>
           <img src={edit} onClick={()=>navigate("/modify?id="+r.id)}  className='logo-btn'/>
           <img src={del} onClick={()=>deleteRow(r.id)} className='logo-btn'/>
        </div>
        
        )):isLoading?<h3 style={{textAlign:"center"}}>Loading...</h3>:<h3 style={{textAlign:"center"}}>No data is found</h3>}

      </div>
      )
    }
    
export default Table