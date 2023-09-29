import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable1 from "../../components/datatable/Database1"

const List1 = ({columns}) => {
  return (
    <div className="list">
     
      <div className="listContainer">
        <Navbar/>
        <Datatable1 columns={columns}/>
      </div>
      <Sidebar/>
    </div>
  )
}

export default List1