import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Single1 = ({ inputs, title }) => {
 
    
const {id} = useParams();
const [values, setValues] = useState({
id : id,
title:'',
desc:'',
price:'',
maxPeople:''
 
});

const { data, loading, error } = useFetch("/rooms/"+id);

useEffect(()=>{
  
   axios.get(`https://rahati-in7.onrender.com/api/rooms/${id}`)
  .then(res => 
    setValues({...values, title:res.data.title,desc:res.data.desc,price:res.data.price,maxPeople:res.data.maxPeople})
    
  )
  .catch(err => console.log(err))
},[])



const nav= useNavigate()

const handle =(e) =>{
  e.preventDefault();

  axios.put(`https://rahati-in7.onrender.com/api/rooms/${id}`,values)
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
                  <label style={{float:"right"}}>العنوان </label>
                  <input
                  value={values.title}
                  onChange={e => setValues({...values,title: e.target.value})}
                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> الوصف</label>
                  <input
                   value={values.desc}
                   onChange={e => setValues({...values,desc: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> السعر </label>
                  <input
                   value={values.price}
                   onChange={e => setValues({...values,price: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> عدد الافراد</label>
                  <input
                   value={values.maxPeople}
                   onChange={e => setValues({...values,maxPeople: e.target.value})}


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

export default Single1;
