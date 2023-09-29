import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable2 from "../../components/datatable/Database2"

const List2 = ({columns}) => {
  return (
    <div className="list">
     
      <div className="listContainer">
        <Navbar/>
        <Datatable2 columns={columns}/>
      </div>
      <Sidebar/>
    </div>
  )
}

export default List2