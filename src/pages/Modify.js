import React, { useState,useEffect } from 'react'
import Header from '../Components/Header'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import Edit from '../Components/Edit';
function Modify() {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  let base_url = "http://localhost/api/placement";
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    
    axios.get(base_url+"/search?id="+search.get('id')).then
  (
    res=>{
        if( res.data.length == 0 )
        {
            navigate("/");
            alert("Id not Found !")
        }
        else
        {
        setData(res.data);
        setIsLoading(false);
        }

    }
  ).catch(err=>alert(err))
  }, [])
  
  return (
    <div>
        <Header/>
        {!isLoading?
        <Edit data={data[0]}/>:"Loading.."}
    </div>
  )
}

export default Modify