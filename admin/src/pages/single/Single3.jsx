import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Single3 = ({ inputs, title }) => {
 
    
const {id} = useParams();
const [values, setValues] = useState({
id : id,
bid:'',
sdate:'',
edate:'',
un:'',
ue:'',
rn:'',
hn:''
});

const { data, loading, error } = useFetch("/confirmb/"+id);

useEffect(()=>{
  
   axios.get(`https://rahati-in7.onrender.com/api/confirmb/${id}`)
  .then(res => 
    setValues({...values, bid:res.data.bid,sdate:res.data.sdate,edate:res.data.edate,un:res.data.un,ue:res.data.ue,rn:res.data.rn,hn:res.data.hn})
    
  )
  .catch(err => console.log(err))
},[])



const nav= useNavigate()

const handle =(e) =>{
  e.preventDefault();

  axios.put(`https://rahati-in7.onrender.com/api/confirmb/${id}`,values)
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
                  <label style={{float:"right"}}> من تاريخ</label>
                  <input
                   value={values.sdate}
                   onChange={e => setValues({...values,sdate: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> رقم الحجز</label>
                  <input
                  value={values.bid}
                  onChange={e => setValues({...values,bid: e.target.value})}
                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}>الى تاريخ </label>
                  <input
                   value={values.edate}
                   onChange={e => setValues({...values,edate: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> اسم المستخدم</label>
                  <input
                   value={values.un}
                   onChange={e => setValues({...values,un: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> الايميل </label>
                  <input
                   value={values.ue}
                   onChange={e => setValues({...values,ue: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> رقم الغرفة </label>
                  <input
                   value={values.rn}
                   onChange={e => setValues({...values,rn: e.target.value})}


                  />
                </div>
                <div className="formInput" >
                  <label style={{float:"right"}}> اسم الفندق  </label>
                  <input
                   value={values.hn}
                   onChange={e => setValues({...values,hn: e.target.value})}


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

export default Single3;
