import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
     
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">شامل الضرائب والرسوم</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">عرض التوافر</button>
          </Link>
        </div>
      </div>
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance"> {item.distance}
        <span className="siDistance2">كلم من المركز</span>
        </span>
        <span className="siTaxiOp">شامل الافطار</span>
        <span className="siSubtitle">
        استوديو عائلي مع تكييف الهواء
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">إلغاء مجاني</span>
        <span className="siCancelOpSubtitle">
        !يمكنك الإلغاء لاحقًا، لذا احصل على هذا السعر الرائع اليوم
        </span>
      </div>
      <img src={item.photos[0]} alt="" className="siImg" />
    </div>
  );
};

export default SearchItem;
