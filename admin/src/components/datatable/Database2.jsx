import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable2 = ({columns}) => {
  const location = "https://rahati-in7.onrender.com/api/";
  const path ="https://rahati-in7.onrender.com/api/rooms";
  
  const [list, setList] = useState();
  const { data, loading, error } = useFetch(`https://rahati-in7.onrender.com/api/rooms`);


  useEffect(() => {
    setList(data);
  }, [data]);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/rooms/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">تعديل</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              حدف
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle" style={{justifyContent:"end"}}>
       
        <Link to={`/rooms/new`} className="link">
          اضافة جديد
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable2;
