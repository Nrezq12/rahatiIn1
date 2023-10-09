import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Database3 from "../../components/datatable/Database3"

const List3 = ({columns}) => {
  return (
    <div className="list">
      <div className="listContainer">
        <Navbar/>
        <Database3 columns={columns}/>
      </div>
      <Sidebar/>

    </div>
  )
}

export default List3