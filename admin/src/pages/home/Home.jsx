import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <div className="home">
     
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          {/* <Widget type="balance" /> */}
        </div>
        
        <div className="charts" >
          <Featured />
          <Chart aspect={2 / 1}  />
        </div>
        
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
