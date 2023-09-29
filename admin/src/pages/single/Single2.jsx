import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Single2 = ({ inputs, title }) => {
 
    
const {id} = useParams();
const [values, setValues] = useState({
id : id,
name:'',
type:'',
title:'',
city:''
 
});

const { data, loading, error } = useFetch("/hotels/"+id);

useEffect(()=>{
  
   axios.get(`https://rahati-in7.onrender.com/api/hotels/${id}`)
  .then(res => 
    setValues({...values, name:res.data.name,type:res.data.type,title:res.data.title,city:res.data.city})
    
  )
  .catch(err => console.log(err))
},[])



const nav= useNavigate()

const handle =(e) =>{
  e.preventDefault();

  axios.put(`https://rahati-in7.onrender.com/api/hotels/${id}`,values)
  .then(res => {
nav('/');    
})
  .catch(err => console.log(err))

}
  return (
    <div className="new">
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
     
          <div className="right">
            <form onSubmit={handle}>

             
                <div className="formInput" >
                  <label style={{float:"right"}}>اسم الفندق</label>
                  <input
                  value={values.name}
                  onChange={e => setValues({...values,name: e.target.value})}
                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> نوع</label>
                  <input
                   value={values.type}
                   onChange={e => setValues({...values,type: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}>العنوان </label>
                  <input
                   value={values.title}
                   onChange={e => setValues({...values,title: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> المدينة</label>
                  <input
                   value={values.city}
                   onChange={e => setValues({...values,city: e.target.value})}


                  />
                </div>
            
              <button   style={{textAlignLast: "center"}} >ارسال</button>
            </form>
          </div>
        </div>
      </div>
      <Sidebar />

    </div>
  );
};

export default Single2;
