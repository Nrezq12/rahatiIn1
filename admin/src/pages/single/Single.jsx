import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Single = ({ inputs, title }) => {
 
    
const {id} = useParams();
const [values, setValues] = useState({
id : id,
username:'',
email:'',
phone:'',
country:'',
city:''
 
});

const { data, loading, error } = useFetch("https://rahati-in7.onrender.com/api/users/"+id);

useEffect(()=>{
  
   axios.get(`/users/${id}`)
  .then(res => 
    setValues({...values, username:res.data.username,email:res.data.email,phone:res.data.phone,country:res.data.country,city:res.data.city})
    
  )
  .catch(err => console.log(err))
},[])



const nav= useNavigate()

const handle =(e) =>{
  e.preventDefault();

  axios.put(`/users/${id}`,values)
  .then(res => {
nav('/');    
})
  .catch(err => console.log(err))

}
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
     
          <div className="right">
            <form onSubmit={handle}>

             
                <div className="formInput" >
                  <label style={{float:"right"}}>اسم المسنخدم</label>
                  <input
                  value={values.username}
                  onChange={e => setValues({...values,username: e.target.value})}
                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> الايميل</label>
                  <input
                   value={values.email}
                   onChange={e => setValues({...values,email: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> رقم الهاتف</label>
                  <input
                   value={values.phone}
                   onChange={e => setValues({...values,phone: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> البلد</label>
                  <input
                   value={values.country}
                   onChange={e => setValues({...values,country: e.target.value})}


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
    </div>
  );
};

export default Single;
