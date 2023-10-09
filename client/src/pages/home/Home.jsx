import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div style={{    display: 'grid'}}> 
      <Navbar />
      <Header/>
      <div className="homeContainer">
      <h1 className="homeTitle">الوجهات الرائجة

</h1>
        <Featured/>
        <h1 className="homeTitle">ابحث حسب نوع مكان الإقامة
</h1>
        <PropertyList/>
        <h1 className="homeTitle">موقع راحتي ان يجعل الأمر سهلاً ومفيدًا دائماً
</h1>
        <FeaturedProperties/>
        <MailList/>
      
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
